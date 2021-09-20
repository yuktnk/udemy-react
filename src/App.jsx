import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area">
        <input type="text" placeholder="to do input" />
        <button>追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未完了のtodo</p>
        <ul>
          <li class="list-row">
            <p>あああああ</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li class="list-row">
            <p>いいいいい</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了済のtodo</p>
        <ul>
          <li class="list-row">
            <p>ううううう</p>
            <button>戻す</button>
          </li>
          <li class="list-row">
            <p>えええええ</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
