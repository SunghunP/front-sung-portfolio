export default function mapDataToComponents (arr, Component, theme) {
  return arr.map((e, idx) => (
    <Component  key={idx} e={e} theme={theme} />
  ));
};