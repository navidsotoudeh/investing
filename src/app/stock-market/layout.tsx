export const metadata = {
  title: "اخبار بازار بورس",
  description: "سهام های بورسی",
  keywords: "سرمایه گذاری" + "بورس" + "سهام",
};

const StockMarketLayout = ({ children }: any) => {
  return (
    <div>
      <h1>This is the stock market layout</h1>
      {children}
    </div>
  );
};
export default StockMarketLayout;
