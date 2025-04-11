

const Todoitem = ({id, isDone, content, date, onDelete}) => {
    return (
        <div className='Todoitem'>
            <input type='checkbox' />
            <span>{content}</span> 
            <span>{new Date(date).toLocaleDateString()}</span>
            <button className="deleteButton"
             onClick={() => {
                onDelete(id); // id 를 onDelete 함수로 넘겨주기
             }}>삭제</button>
        </div>
    )
}
export default Todoitem;