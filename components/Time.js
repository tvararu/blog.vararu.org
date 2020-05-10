const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const Time = ({ iso }) => <time dateTime={iso}>{formatDate(iso)}</time>;

export default Time;
