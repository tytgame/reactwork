

const Todoitem = ({id, isDone, content, date, onDelete, onToggle}) => {
    return (
        <div className='Todoitem'>
            <input type='checkbox'
            checked={isDone} 
            onChange={() => onToggle(id)}
            />
            <span style={{
                textDecoration: isDone ? "line-through" : "none"
            }}>{content}</span> 
            <span>{new Date(date).toLocaleDateString()}</span>
            <button className="deleteButton"
             onClick={() => {
                if(window.confirm("정말 삭제하시겠습니까?")) {
                onDelete(id); // id 를 onDelete 함수로 넘겨주기
             }}}>삭제</button>
             
        </div>
    )
}
export default Todoitem;