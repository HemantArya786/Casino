import "./App.css";

function App() {
  return (
    <main className="App">
      <h3 className="text-center text-white">GAMES</h3>
      <section className=" d-flex justify-content-between me-3 ms-3 my-3">
        <div className="card-One" style={{ width: " 18rem" }}>
          <img src="./Image/BACCARAT.png" className="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center text-white">BACCARAT</h5>
          </div>
        </div>
        <div className="card-Two" style={{ width: " 18rem" }}>
          <img src="./Image/BLACKJACK.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 className="card-title text-center text-white">BLACKJACK</h5>
          </div>
        </div>
        <div className="card-One" style={{ width: " 18rem" }}>
          <img src="./Image/ROULETTE.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-white text-center">ROULETTE</h5>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center gap-5 ">
        <div className="card-One" style={{ width: " 18rem" }}>
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title  text-white text-center">CRAPS</h5>
          </div>
        </div>
        <div className="card-One" style={{ width: " 18rem" }}>
          <img src="./Image/KENO.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-white text-center">KENO</h5>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
