import localFont from 'next/font/local';

const sportingGrotesque = localFont({
  src: [
    {
      path: '../../../public/fonts/SportingGrotesque/SportingGrotesque-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SportingGrotesque/SportingGrotesque-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sporting',
  display: 'swap',
});

export default sportingGrotesque;
