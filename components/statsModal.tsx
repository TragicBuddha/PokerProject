import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Amplify } from 'aws-amplify';
import { generateClient } from '@aws-amplify/api';
import awsconfig from '/Users/hj/Desktop/PokerProject/src/aws-exports.js';
import { listGameRecords } from '/Users/hj/Desktop/PokerProject/src/graphql/queries.ts';

// Configure backend with aws-exports.js
Amplify.configure(awsconfig);

// Generating a client to connect with backend
const client = generateClient();

const StatsModal = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  const [totalCashIn, setTotalCashIn] = useState<number>(0);
  const [totalCashOut, setTotalCashOut] = useState<number>(0);
  const [totalProfit, setTotalProfit] = useState<number>(0);
  const [placementData, setPlacementData] = useState<number[]>(Array(10).fill(0));

  useEffect(() => {
    const fetchGameRecords = async () => {
      try {
        const gameRecordsData = await client.graphql({
          query: listGameRecords
        });
        const gameRecords = gameRecordsData.data.listGameRecords.items;

        // Calculate total cash in, cash out, profit, and placement
        let totalCashIn = 0;
        let totalCashOut = 0;
        let totalProfit = 0;
        const placementCounts = Array(10).fill(0);

        gameRecords.forEach(record => {
          if (record.gameType === 'CASH') {
            const cashIn = record.cashIn !== undefined && record.cashIn !== null ? parseFloat(record.cashIn.toString()) : 0;
            const cashOut = record.cashOut !== undefined && record.cashOut !== null ? parseFloat(record.cashOut.toString()) : 0;
            totalCashIn += cashIn;
            totalCashOut += cashOut;
            totalProfit += cashOut - cashIn;
          }
          if (record.gameType === 'TOURNAMENT' && record.tournamentPlace !== undefined && record.tournamentPlace !== null) {
            const place = parseInt(record.tournamentPlace.toString());
            if (place >= 1 && place <= 10) {
              placementCounts[place - 1]++;
            }
          }
        });

        setTotalCashIn(totalCashIn);
        setTotalCashOut(totalCashOut);
        setTotalProfit(totalProfit);
        setPlacementData(placementCounts);
      } catch (error) {
        console.error('Error fetching game records:', error);
      }
    };

    if (isVisible) {
      fetchGameRecords();
    }
  }, [isVisible]);

  const data = {
    labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
    datasets: [
      {
        data: placementData,
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
    yAxisInterval: 1, 
    options: {
      yAxisLabel: '', 
      yLabels: {
        formatter: (value) => `${value} times`, 
      },
    },
  };

  // Rendering modal
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <ImageBackground
        source={require('/Users/hj/Desktop/PokerProject/assets/images/app_background.png')}
        style={styles.background}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={onClose} style={styles.backButtonContainer}>
            <View style={styles.backButton}>
              <Image
                source={require('/Users/hj/Desktop/PokerProject/assets/images/exit_button.png')}
                style={styles.backButtonImage}
              />
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.cashGamesHeading}>Cash Games Summary</Text>
          <View style={styles.cashStatsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Cash In</Text>
              <Text style={styles.cashInValue}>{"$" + totalCashIn}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Cash Out</Text>
              <Text style={styles.cashOutValue}>{"$" + totalCashOut}</Text>
            </View>
          </View>
          <View style={styles.totalStatBox}>
            <Text style={styles.totalStatLabel}>Total Profit / Bankroll</Text>
            <Text style={styles.totalProfitValue}>{"$" + totalProfit}</Text>
          </View>
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Tournament Placings Frequency</Text>
            <BarChart
              style={styles.chart}
              data={data}
              width={screenWidth - 5}
              height={220}
              yAxisLabel=''
              yAxisSuffix=""
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  cashGamesHeading: {
    fontFamily: 'ComicNeue-Font',
    marginTop: 150,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cashStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  statBox: {
    width: '40%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  statLabel: {
    fontFamily: 'ComicNeue-Font',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cashInValue: {
    fontFamily: 'ComicNeue-Font',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  cashOutValue: {
    fontFamily: 'ComicNeue-Font',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  totalStatBox: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 20,
  },
  totalStatLabel: {
    fontFamily: 'ComicNeue-Font',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalProfitValue: {
    fontFamily: 'ComicNeue-Font',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  chartContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100,
  },
  chartTitle: {
    fontFamily: 'ComicNeue-Font',
    fontSize: 28,
    fontWeight: 'bold',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 12,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonImage: {
    height: 70,
    width: 70,
  },
  backButtonText: {
    fontFamily: 'ComicNeue-Font',
    fontSize: 16,
    color: 'white',
    marginTop: 0,
  },
});

export default StatsModal;
