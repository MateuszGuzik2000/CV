
class App extends React.Component {

  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll = () => {
    if (window.scrollY < 150 && !this.state.menuOp) {
        this.setState(prevState => ({ menuOp: !prevState.menuOp }));
    } else if(window.scrollY > 150 &&   this.state.menuOp) {
        this.setState({ menuOp: false });
    }

}
  state = {
    isVisible: false,
    menuOp: true
  };

Checkscr = () => {
  console.log(scrollY);
}  

  showText = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div id="FrontPage">
          <div id="Menu" style={{ opacity: this.state.menuOp ? 1 : 0.8 }}>
            <a class="MenuBtn" href="#FrontPage">
              O mnie <i class="bi bi-person-circle"></i>
            </a>
            <a class="MenuBtn" href="#Exp">
              Doświadczenie <i class="bi bi-graph-up-arrow"></i>
            </a>
            <a class="MenuBtn">
              Umiejętności<i class="bi bi-bar-chart"></i>
            </a>
            <a class="MenuBtn">
              Kontakt <i class="bi bi-person-lines-fill"></i>
            </a>
          </div>

          <div id="Descr">
            <div
              id="description"
              style={{ display: this.state.isVisible ? "none" : "block" }}
            >
              <div class="ButtonSwitch" onClick={this.showText}>
                <a>O mnie</a>
              </div>
              <div id="descriptionPhoto"></div>
              <div id="NameDescription">Mateusz Guzik</div>

              <div id="TextDescription">
                <a class="ButtonDesc" href="">
                  <i class="bi bi-person-lines-fill"></i>Kontakt
                </a>
                <a class="ButtonDesc" href="">
                  <i class="bi bi-github"></i>GitHub
                </a>
                <a class="ButtonDesc" href="">
                  <i class="bi bi-cloud-arrow-down-fill"></i>Pobierz CV
                </a>
              </div>
            </div>
            <div
              id="descriptionText"
              style={{ display: this.state.isVisible ? "block" : "none" }}
            >
              <div class="ButtonSwitch" onClick={this.showText}>
                <a>Linki</a>
              </div>
              <div class="AM">
              Od najmłodszych lat informatykę traktowałem nie tylko jako hobby, ale przede wszystkim jako pasję, która towarzyszy mi do dziś. Fascynacja światem technologii rozwinęła się u mnie już w dzieciństwie i przez lata nieustannie się pogłębiała. Właśnie dzięki tej pasji każdy aspekt informatyki stał się dla mnie nie tylko przystępny, ale także niesamowicie ekscytujący.

Każda dziedzina informatyki, niezależnie od jej złożoności, przyciąga moją uwagę. Programowanie, grafika komputerowa, montaż wideo, zarządzanie bazami danych, sieci komputerowe oraz sprzęt – to wszystko stanowi integralną część mojej codzienności. Nie boję się nowych wyzwań i zawsze dążę do pogłębiania swojej wiedzy w każdej z tych dziedzin.

Programowanie jest dla mnie jak rozwiązywanie skomplikowanych łamigłówek – każda linijka kodu to krok do stworzenia czegoś wyjątkowego. Grafikę komputerową traktuję jako formę sztuki, która pozwala mi wyrażać kreatywność i tworzyć wizualnie atrakcyjne projekty. Montaż wideo umożliwia mi łączenie obrazów i dźwięków w spójną całość, co daje nieograniczone możliwości twórcze.

Bazy danych i zarządzanie nimi uczą mnie precyzji oraz dbałości o detale, a sieci komputerowe pokazują, jak ważna jest komunikacja i współpraca między różnymi systemami. Sprzęt komputerowy to natomiast fundament, bez którego żadna z tych dziedzin nie mogłaby istnieć – dlatego też poświęcam dużo uwagi jego konfiguracji i optymalizacji.

Nieustannie dążę do rozwoju i doskonalenia swoich umiejętności. Z każdym nowym projektem zdobywam cenne doświadczenie, które pozwala mi poszerzać swoje horyzonty i stawiać czoła coraz bardziej wymagającym zadaniom. Informatyka jest dla mnie niekończącą się podróżą pełną odkryć, wyzwań i satysfakcji z osiąganych celów.

Moja pasja do informatyki nie zna granic, a każde nowe wyzwanie traktuję jako szansę na dalszy rozwój. Jestem przekonany, że moja determinacja i zamiłowanie do technologii pozwolą mi osiągnąć jeszcze wiele sukcesów w tej dziedzinie.
              </div>
            </div>
          </div>
        </div>
        <div id="Exp">
          <div id="ExpHeader">
            <a class="ExpHeaderText">Doświadczenie</a>
          </div>
          <div id="ExpMain">
            <div class="WorkContainer">
              <div class="WorkContainerHeader"><a class="WCH">Początek </a> 
                                                            <br/><a class="WCHB">różne</a></div>
              <div class="WorkContainerMain">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="ButtonShow"
                >
                  Więcej
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Początek
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">cos tam cos tam cs tam</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="TimeLine">
              <i class="bi bi-arrow-right-square-fill"></i>
            </div>
            <div class="WorkContainer">
              <div class="WorkContainerHeader"><a class="WCH" >Specjalista ds E-Commerce </a> 
                                                            <br/><a class="WCHB">Target</a></div>
              <div class="WorkContainerMain">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="ButtonShow"
                >
                  Więcej
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Początek
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">cos tam cos tam cs tam</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="TimeLine">
              <i class="bi bi-arrow-right-square-fill"></i>
            </div>
            <div class="WorkContainer">
              <div class="WorkContainerHeader">Unimet - informatyk</div>
              <div class="WorkContainerMain">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="ButtonShow"
                >
                  Więcej
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Początek
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">cos tam cos tam cs tam</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ExpHeader">
            <a class="ExpHeaderText">Edukacja</a>
          </div>
          <div id="ExpMain">
          <div class="WorkContainer">
              <div class="WorkContainerHeader">Początek - różne</div>
              <div class="WorkContainerMain">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="ButtonShow"
                >
                  Więcej
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Początek
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">cos tam cos tam cs tam</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="TimeLine">
              <i class="bi bi-arrow-right-square-fill"></i>
            </div>
            <div class="WorkContainer">
              <div class="WorkContainerHeader">Początek - różne</div>
              <div class="WorkContainerMain">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id="ButtonShow"
                >
                  Więcej
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Początek
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">cos tam cos tam cs tam</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
