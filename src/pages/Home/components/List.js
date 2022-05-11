import Item from "./Item";
const List = ({ listData, deleteData }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            key={id}
            id={id}
          />
        ); 
      })}
    </div>
  );
};
export default List;
