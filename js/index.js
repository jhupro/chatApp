const domBtnOthers = document.getElementById(`btnOthers`);
const domOthers = document.getElementById(`others`);

domBtnOthers.addEventListener('click', event => {
  domOthers.classList.toggle('open');
});

const App = () => {
return (
  <h1>hello world</h1>
)

}

ReactDOM.render(<App />, document.getElementById('conversation'));