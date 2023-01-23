export default function mapDataToComponents (arr, Component) {
  return arr.map((e, idx) => (
    <Component  key={idx} e={e} />
  ));
};