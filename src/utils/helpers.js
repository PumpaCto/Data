export const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

export const shortenAddress = (address) => {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
