import deskIcon from './assets/icons8-desk-50.png';
import pipeline from './assets/icons8-water-control-64.png';
import scrapping from './assets/scrapping5.png'


export const projects = [
  {
    title: 'Support Desk',
    description: 'A platform that lets users submit complaints or feedback via a secure form and view submitted entries, ensuring transparency and efficient resolution.',
    link: 'https://celebrated-beignet-b1b3bc.netlify.app/',
    icon: deskIcon
  },
  {
    title: 'Pandas based EtL Pipeline',
    description: 'A modular Python ETL pipeline using Pandas, designed for maintainable and scalable data processing of raw CSV data.',
    link: 'https://github.com/Ahmed8eith/Pandas-based-ETl-pipeline',
    icon: pipeline
  },
  {
    title: 'Wuzzuf Web Scrapper',
    description: 'Python ETL pipeline that scrapes Data Engineer job listings from Wuzzuf using requests and BeautifulSoup, handles pagination, extracts structured job data, converts posting dates, cleans and removes duplicates with Pandas, and outputs a ready-to-analyze dataset in CSV format.',
    link: 'https://github.com/Ahmed8eith/Wuzzuf-Web-Scrapper',
    icon: scrapping
  }
];
