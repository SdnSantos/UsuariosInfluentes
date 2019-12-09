import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import api from '../../services/api';

import { Component, Title } from './styles';

export default function Chart() {
  const [users, setUsers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [interactions, setInteractions] = useState([]);

  const names = users.forEach(u => {
    console.tron.log(u.name.first);
  });

  const [chartData, setChartData] = useState({
    labels: ['Ivanete', 'Heldemaro', 'Hermelinda', 'Argemira'],
    datasets: [
      {
        label: 'Quantity',
        data: [200, 400, 600, 800],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    async function loadUsers() {
      const dataUsers = await api.get(`/users`);

      setUsers(dataUsers.data);
    }

    async function loadBrands() {
      const dataBrands = await api.get(`/brands`);

      setBrands(dataBrands.data);
    }

    async function loadInteractions() {
      const dataInteractions = await api.get(`/interactions`);

      setInteractions(dataInteractions.data);
    }

    loadUsers();
    loadBrands();
    loadInteractions();
  }, []);

  console.tron.log('----------------------Users----------------------');
  console.tron.log(users);
  console.tron.log('----------------------Brands----------------------');
  console.tron.log(brands);
  console.tron.log('----------------------Interactions----------------------');
  console.tron.log(interactions);

  return (
    <Component>
      <Title>Usuários Influentes</Title>
      <Bar
        data={chartData}
        width={100}
        height={300}
        options={{
          maintainAspectRatio: false,
          // title: {
          //   display: true,
          //   text: 'Usuários Influentes',
          //   fontSize: 35,
          // },
          legend: {
            display: true,
            position: 'right', // 'bottom'
          },
        }}
      />
    </Component>

    // <>
    // <canvas id="myChart"></canvas>
    // <script>
    //   var ctx = document.getElementById('myChart');
    //   var myChart = new Chart(ctx, {
    //     type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    //     data: {
    //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //       datasets: [
    //         {
    //           label: '# of Votes',
    //           data: [12, 19, 3, 5, 2, 3],
    //           backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 255, 0.2)',
    //             'rgba(255, 159, 64, 0.2)',
    //           ],
    //           borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //             'rgba(255, 159, 64, 1)',
    //           ],
    //           borderWidth: 1,
    //         },
    //       ],
    //     },
    //     options: {
    //       scales: {
    //         yAxes: [
    //           {
    //             ticks: {
    //               beginAtZero: true,
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   });
    // </script>
    // </>
  );
}
