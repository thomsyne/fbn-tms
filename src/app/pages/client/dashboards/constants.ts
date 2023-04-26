import { BarChartOptions, DonutChartOptions } from "./model";

export const TransactionApprovalChart: Partial<BarChartOptions> = {
    series: [
      {
        name: "Transaction Approval Rate",
        data: [22000, 12000, 1900, 28500, 18000, 30000, 13000]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
      fontFamily: 'Poppins R',
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mon", "Tue",  "Wed",  "Thu",  "Fri",  "Sat",  "Sun"]
    },
    fill: {
      colors: ['#4F84CF', '#4F84CF', '#4F84CF', '#4F84CF', '#4F84CF', '#4F84CF', '#4F84CF']
    }
};

export const FailedTransactionChart: Partial<DonutChartOptions> = {
    series: [12, 12, 12, 12, 12, 12, 12, 12],
    
    chart: {
      type: "donut",
      height: 300,
    },
    labels: ["Issuer Inoperative <br/> (20%)", "Network Downtime", "Transaction Declined", "Transaction Declined but Debited", "Server Error", "NIBSS Downtime", "Insufficient Funds", "Expired Card"],
    responsive: [
      {
        breakpoint: 1440,
        options: {
          chart: {
            //width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total'
            }
          }
        },
        customScale: 1
      },
    },
    colors: ["#003B65", "#336284", "#6689A3", "#99B1C1", "#B2C4D1", "#CCD8E0", "#E5EBF0", "#E5EBF099"]
  };

  export const TransactionByRoutingRule: Partial<DonutChartOptions> = {
    series: [250000, 120000, 55000, 75000],
    
    chart: {
      type: "donut",
      height: 300,
    },
    labels: ["Successful <br/> ₦250,000.00 <br/> (64%)", "Pending <br/> ₦120,000.00 <br/> (12%)", "Failed <br/> ₦55,000.00 <br/> (8%)", "Reversed <br/> ₦75,000.00 <br/> (12%)"],
    responsive: [
      {
        breakpoint: 1440,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            total: {
              show: false,
              label: 'Total'
            }
          }
        },
        customScale: 1
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    }
  };

export const TopTerminalIssues: Partial<BarChartOptions> = {
    series: [
      {
        name: "Top Issues on Terminal",
        data: [56, 40, 38, 29, 17, 10, 4]
      }
    ],
    chart: {
      type: "bar",
      fontFamily: 'Poppins R',
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
      },
    },
    colors: ["#FF4560", "#05E296", "#FEAF1A", "#008FFB", "#FF4560", "#05E296", "#FEAF1A"],
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ["Menu Lock", "Faulty Printer", "Faulty Charger",  "Menu Lock",  "Faulty Printer",  "Faulty Charger",  "Faulty SIM Port"]
    },
    fill: {
      colors: ["#FF4560", "#05E296", "#FEAF1A", "#008FFB", "#FF4560", "#05E296", "#FEAF1A"]
    }
};