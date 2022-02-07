google.charts.load("current", { packages: ["corechart", "bar"] });
class CardsView {
  clearSection(section) {
    section.innerHTML = ``;
  }

  findByPrice(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
        <div class="card-question">
            <h1>
                Dentre os jogos por menos de 4 dólares, quantos possuem a quantidade de avaliações positivas acima
                da
                média?
            </h1>
            <div class="card-categories">
                <div class="category-btn-sm-lg">
                    <button id="price">preço</button>
                </div>
                <div class="category-btn-sm-lg">
                    <button id="ratings">avaliações</button>
                </div>
            </div>
            <div class="card-graphic">
                <div id="dollars"></div>
            </div>
            <div class="card-subtitle">
                <div class="card-description">
                    <p>
                        Dentre os jogos encontrados com a faixa de preço inferior a $4.00, 90.8% possuem
                        majoritariamente avaliações positivas abaixo da média, enquanto apenas 9.2% possuem uma
                        quantidade de avaliações positivas acima da média.
                    </p>
                </div>
                <div class="card-btn-section">
                    <button><a href="./assets/graphics/price-positive-ratings-graphic.png" download>Baixar
                            imagem</a></button>
                    <button><a href="./queries/read-database/price-positive-ratings-query.sql" download>Baixar
                            query</a></button>
                </div>
            </div>
        </div>
    </section>
    <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Quais os 10 jogos mais caros e quais os seus gêneros?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="most-expensive"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            O jogo mais caro beira a faixa de $90.00, enquanto o menos caro da lista dos 10 mais caros
                            roda
                            em torno
                            de
                            $40.00.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/games-genres-expensive-grafics.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/games-genres-expensive-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section">
            <div class="card-question">
                <h1>
                    Qual é a quantidade de jogos e seus preços com as categorias 'Competitivo' e 'cross-platform'?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/competitive-cross-platform-graphic.png" alt="">
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            Apenas 1 jogo competitivo possui a possibilidade de ser jogado em 'cross-platform':
                            'Counter-Strike: Source'. Além disso, ele conta com um preço acessível.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/competitive-cross-platform-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/competitive-cross-platform-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        `;

    google.charts.setOnLoadCallback(dollars);

    function dollars() {
      let data = google.visualization.arrayToDataTable([
        ["AVALIAÇÕES POSITIVAS", "QUANTIDADE DE JOGOS POR MENOS DE 4 DÓLARES"],
        ["Abaixo da média", 474],
        ["Acima da média", 48],
      ]);

      let options = {
        chartArea: { height: 350 },
        height: 380,
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: "white",
        },
        backgroundColor: "#32003a",
        fontName: "Verdana",
        legend: {
          position: "left",
          alignment: "center",
          textStyle: { color: "#FFFFFF" },
        },
      };

      let chart = new google.visualization.PieChart(
        document.getElementById("dollars")
      );
      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(mostExpensive);

    function mostExpensive() {
      let data = new google.visualization.arrayToDataTable([
        ["JOGO", "CATEGORIA", "PREÇO"],
        ["3DCoat 4.8", "Animação", 95.99],
        ["Leadwerks", "Animação; Ilustração", 78.99],
        ["Aartform Curvy 3D 3.0", "Animação", 75.99],
        ["Clickteam Fusion 2.5", "Animação; Educação", 69.99],
        ["Wing IDE 5", "Utilidades", 60.99],
        ["RPG Maker VX Ace", "Ilustração", 52.99],
        ["Call of Duty: Ghosts", "Ação", 39.99],
        ["Call of Duty: A W", "Ação", 39.99],
        ["Wreckfest", "Ação; Independente", 38.99],
        ["F.E.A.R.", "Ação", 35.96],
      ]);

      let options = {
        height: 400,
        backgroundColor: "#32003a",
        chartArea: {
          width: "60%",
          backgroundColor: "#32003a",
        },
        legend: {
          position: "none",
        },
        bar: {
          groupWidth: "60%",
        },
        hAxis: {
          title: "NOME DO JOGO",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
            fontName: "Verdana",
            fontSize: 12,
          },
          minValue: 0,
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
            fontSize: 5.5,
          },
        },
        vAxis: {
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.charts.Bar(
        document.getElementById("most-expensive")
      );
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }

  findByRatings(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Dentre os jogos por menos de 4 dólares, quantos possuem a quantidade de avaliações positivas acima
              da
              média?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="price">preço</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="ratings">avaliações</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="dollars"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      Dentre os jogos encontrados com a faixa de preço inferior a $4.00, 90.8% possuem
                      majoritariamente avaliações positivas abaixo da média, enquanto apenas 9.2% possuem uma
                      quantidade de avaliações positivas acima da média.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/price-positive-ratings-graphic.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/price-positive-ratings-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>
  <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Entre 2070 registros, quantos jogos possuem, e quantos não possuem, inglês como linguagem
                    oficial e
                    qual a média de suas avaliações positivas e negativas?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="language">linguagem</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="english"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            Há uma diferença significativa de avaliações positivas para negativas dos jogos que possuem
                            inglês como linguagem oficial. Mas deve ser levado em conta que poucos jogos possuem outras
                            linguagens disponíveis.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/official-english-query-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/official-english-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Dos jogos que possuem e-mail de suporte, há mais avaliações positivas ou negativas?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="supp">suporte</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="email"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            Há um considerável aumento de avaliações positivas nos jogos que possuem e-mail de suporte.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/games-support-email-query-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/games-support-email-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Quais desenvolvedoras acumulam a maior quantidade de avaliações negativas?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="developer">desenvolvedora</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                   <div id="developer-ratings"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            A "Valve; Hidden Path Entertainment" acumula a maioria esmagadora de avaliações negativas.
                            Em
                            contraposição, a 'Chucklefish' acumula apenas 1.22% de avaliações negativas em seus jogos.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/developer-negative-ratings-graphics.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/developer-negative-ratings-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
  `;
    google.charts.setOnLoadCallback(dollars);

    function dollars() {
      let data = google.visualization.arrayToDataTable([
        ["AVALIAÇÕES POSITIVAS", "QUANTIDADE DE JOGOS POR MENOS DE 4 DÓLARES"],
        ["Abaixo da média", 474],
        ["Acima da média", 48],
      ]);

      let options = {
        chartArea: { height: 350 },
        height: 380,
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: "white",
        },
        backgroundColor: "#32003a",
        fontName: "Verdana",
        legend: {
          position: "left",
          alignment: "center",
          textStyle: { color: "#FFFFFF" },
        },
      };

      let chart = new google.visualization.PieChart(
        document.getElementById("dollars")
      );
      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(english);

    function english() {
      let data = google.visualization.arrayToDataTable([
        ["INGLÊS", "CONTAGEM", "MEDIA POSITIVA", "MÉDIA NEGATIVA"],
        ["OUTRA LINGUAGEM", 1, 204, 215],
        ["INGLÊS", 2069, 5618.92, 890.81],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        legend: { textStyle: { color: "#FFFFFF" } },
        pointSize: 7,
        seriesType: "bars",
        series: {
          pointShape: "circle",
          1: {
            type: "line",
          },
        },
        vAxis: {
          title: "AVALIAÇÕES",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        hAxis: {
          title: "LINGUAGEM",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.visualization.ComboChart(
        document.getElementById("english")
      );
      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(email);

    function email() {
      let data = google.visualization.arrayToDataTable([
        ["TIPO DE AVALIAÇÃO", "SOMA TOTAL", "MÉDIA GERAL"],
        ["POSITIVA", 3763.778, 3647.07],
        ["NEGATIVA", 644.446, 624.46],
      ]);

      let options = {
        chartArea: { height: 320 },
        height: 390,
        backgroundColor: "#32003a",
        colors: ["#faf170"],
        hAxis: {
          title: "MÉDIA",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        vAxis: {
          title: "QUANTIDADE",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        bubble: {
          textStyle: {
            fontSize: 10,
            fontName: "Verdana",
            color: "black",
            bold: false,
            italic: false,
            auraColor: "none",
          },
        },
      };

      let chart = new google.visualization.BubbleChart(
        document.getElementById("email")
      );
      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(developerRatings);

    function developerRatings() {
      let data = google.visualization.arrayToDataTable([
        ["DESENVOLVEDORA", "AVALIAÇÕES NEGATIVAS"],
        ["Valve; Hidden Path Entertainment", 402.313],
        ["OVERKILL", 56.523],
        ["RETO MOTO", 34.416],
        ["Rockstar North", 18.926],
        ["The Fun Pimps", 16.905],
        ["Expansive Worlds", 15.403],
        ["Rocksteady Studios", 12.981],
        ["Relic Entertainment", 12.038],
        ["Little Orbit", 11.779],
        ["Gearbox Software", 11.021],
        ["Torn Banner Studios", 10.939],
        ["Phosphor Games Studio", 10.167],
        ["Endnight Games Ltd", 8.881],
        ["Sledgehammer Games", 8.379],
        ["Chucklefish", 7.816],
      ]);

      let options = {
        chartArea: { height: 350 },
        height: 380,
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: "white",
        },
        backgroundColor: "#32003a",
        fontName: "Verdana",
        legend: { position: "left", textStyle: { color: "#FFFFFF" } },
      };

      let chart = new google.visualization.PieChart(
        document.getElementById("developer-ratings")
      );
      chart.draw(data, options);
    }
  }

  findByAge(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-tag-assassin-age">
      <div class="card-question">
          <h1>
              Quais jogos sem classificação mínima de idade possuem a tag "Assassin" e qual o tempo médio de jogo
              dedicado a eles?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="playtime">tempo de jogo</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="tags">tags</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="age">idade recomendada</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="assassin"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      De acordo com a análise, há pelo menos 2 jogos sem idade mínima e com a tag "Assassin" que
                      possuem mais de 2.000 horas de gameplay em média. Dentre eles, destaca-se Counter-Strike,
                      com
                      uma média que ultrapassa a marca de 14.000.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/tag-assassin-required-age-graphics.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/tag-assassin-required-age-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>
  <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Quantos jogos possuem a idade recomendada de 7, 12 e 16, respectivamente?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="age">idade recomendada</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="required-age"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            A maioria dos jogos disponíveis possuem 16 como idade recomendada. Em contramão, apenas
                            2.44%
                            possuem 7 como idade recomendada.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/min-required-age-query.graphic2.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/min-required-age-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Quais os 5 gêneros com maior restrição de idade?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="age">idade recomendada</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="genres-age"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            A maioria de jogos com a maior restrição de idade, que é 18, concentra-se nos gêneros
                            'Ação',
                            'Violento' e
                            'Estratégia'.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/games-genres-age-graphics.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/games-genres-age.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
  `;

    google.charts.setOnLoadCallback(assassin);

    function assassin() {
      let data = google.visualization.arrayToDataTable([
        ["NOME DO JOGO", "TEMPO MÉDIO"],
        ["Counter-Strike", 17612],
        [`Assassin's Creed IV Black Flag`, 3234],
        [`Assassin'S Creed 2 Deluxe Edition`, 1046],
        ["Dishonored", 749],
        [`Assassin's Creed: Director's Cut Edition`, 360],
        ["Styx: Master of Shadows", 243],
        ["The Ship: Murder Party", 233],
        ["Velvet Assassin", 9],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        chartArea: {
          left: 350,
          height: "60%",
          width: "60%",
        },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "TEMPO MÉDIO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          minValue: 0,
          maxValue: 18000,
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
        vAxis: {
          title: "NOME DO JOGO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
      };
      let chart = new google.visualization.BarChart(
        document.getElementById("assassin")
      );

      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(requiredAge);

    function requiredAge() {
      let data = google.visualization.arrayToDataTable([
        ["ANO DE LANÇAMENTO", "TOTAL DE JOGOS"],
        ["16", 67],
        ["12", 13],
        ["7", 2],
      ]);

      let options = {
        chartArea: { height: 350 },
        height: 380,
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: "white",
        },
        backgroundColor: "#32003a",
        fontName: "Verdana",
        legend: {
          position: "left",
          alignment: "center",
          textStyle: { color: "#FFFFFF" },
        },
      };

      let chart = new google.visualization.PieChart(
        document.getElementById("required-age")
      );
      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(genresAge);

    function genresAge() {
      let data = google.visualization.arrayToDataTable([
        ["GÊNEROS", "IDADE MÍNIMA"],
        ["Ação", 18],
        ["Violência; Estratégia", 18],
        ["Ação; Aventura", 18],
        ["Ação; RPG", 18],
        ["Ação; Simulação", 18],
      ]);

      let options = {
        chartArea: { height: 250 },
        height: 380,
        backgroundColor: "#32003a",
        pointSize: 5,
        series: { pointShape: "circle" },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "GÊNEROS",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        vAxis: {
          minValue: 0,
          title: "IDADE MÍNIMA",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.visualization.AreaChart(
        document.getElementById("genres-age")
      );
      chart.draw(data, options);
    }
  }

  findByLanguage(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Entre 2070 registros, quantos jogos não possuem, e quantos não possuem, inglês como linguagem
              oficial e
              qual a média de suas avaliações positivas e negativas?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="language">linguagem</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="ratings">avaliações</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="english"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      Há uma diferença significativa de avaliações positivas para negativas dos jogos que possuem
                      inglês como linguagem oficial. Mas deve ser levado em conta que poucos jogos possuem outras
                      linguagens disponíveis.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/official-english-query-graphic.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/official-english-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>`;

    google.charts.setOnLoadCallback(english);

    function english() {
      let data = google.visualization.arrayToDataTable([
        ["INGLÊS", "CONTAGEM", "MEDIA POSITIVA", "MÉDIA NEGATIVA"],
        ["OUTRA LINGUAGEM", 1, 204, 215],
        ["INGLÊS", 2069, 5618.92, 890.81],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        legend: { textStyle: { color: "#FFFFFF" } },
        pointSize: 7,
        seriesType: "bars",
        series: {
          pointShape: "circle",
          1: {
            type: "line",
          },
        },
        vAxis: {
          title: "AVALIAÇÕES",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        hAxis: {
          title: "LINGUAGEM",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.visualization.ComboChart(
        document.getElementById("english")
      );
      chart.draw(data, options);
    }
  }

  findByGenres(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Quais os 10 jogos mais caros e quais os seus gêneros?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="price">preço</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="genres">gêneros</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="most-expensive"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      O jogo mais caro beira a faixa de $90.00, enquanto o menos caro da lista dos 10 mais caros
                      roda
                      em torno
                      de
                      $40.00.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/games-genres-expensive-grafics.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/games-genres-expensive-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>
  <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Qual a quantidade acumulada de downloads de jogos de acordo com o gênero (separado por gêneros
                    individuais)?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="downloads">quantidade de downloads</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="downloads-genres"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            O gênero 'Ação' é disparadamente o mais procurado entre os jogadores, seguido de
                            'Estratégia'.
                            Em contraposto, há pouquíssimos downloads de 'Utilidades'.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/games-genres-downloads-graphics.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/games-genres-downloads-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Quais os 5 gêneros com maior restrição de idade?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="age">idade recomendada</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="genres-age"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            A maioria de jogos com a maior restrição de idade, que é 18, concentra-se nos gêneros
                            'Ação',
                            'Violento' e
                            'Estratégia'.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/games-genres-age-graphics.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/games-genres-age.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Qual é a quantidade de jogos e seus preços com as categorias 'Competitivo' e 'cross-platform'?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/competitive-cross-platform-graphic.png" alt="">
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            Apenas 1 jogo competitivo possui a possibilidade de ser jogado em 'cross-platform':
                            'Counter-Strike: Source'. Além disso, ele conta com um preço acessível.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/competitive-cross-platform-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/competitive-cross-platform-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Qual é a quantidade de jogos que possuem a categoria ou o gênero 'Ação', por desenvolvedora? (entre
                    as
                    10
                    primeiras)
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="developer">desenvolvedora</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="genres">gêneros</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="developer-action"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            A 'Valve' lidera a lista com jogos de ação, seguida da 'Ubisoft Montreal' e a 'Id Software'.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/action-games-per-developer-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/action-games-per-developer-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
  `;
    google.charts.setOnLoadCallback(mostExpensive);

    function mostExpensive() {
      let data = new google.visualization.arrayToDataTable([
        ["JOGO", "CATEGORIA", "PREÇO"],
        ["3DCoat 4.8", "Animação", 95.99],
        ["Leadwerks", "Animação; Ilustração", 78.99],
        ["Aartform Curvy 3D 3.0", "Animação", 75.99],
        ["Clickteam Fusion 2.5", "Animação; Educação", 69.99],
        ["Wing IDE 5", "Utilidades", 60.99],
        ["RPG Maker VX Ace", "Ilustração", 52.99],
        ["Call of Duty: Ghosts", "Ação", 39.99],
        ["Call of Duty: A W", "Ação", 39.99],
        ["Wreckfest", "Ação; Independente", 38.99],
        ["F.E.A.R.", "Ação", 35.96],
      ]);

      let options = {
        height: 400,
        backgroundColor: "#32003a",
        chartArea: {
          width: "60%",
          backgroundColor: "#32003a",
        },
        legend: {
          position: "none",
        },
        bar: {
          groupWidth: "60%",
        },
        hAxis: {
          title: "NOME DO JOGO",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
            fontName: "Verdana",
            fontSize: 12,
          },
          minValue: 0,
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
            fontSize: 5.5,
          },
        },
        vAxis: {
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.charts.Bar(
        document.getElementById("most-expensive")
      );
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    google.charts.setOnLoadCallback(downloadsGenres);

    function downloadsGenres() {
      let data = google.visualization.arrayToDataTable([
        ["GÊNEROS", "DOWNLOADS"],
        ["Ação", 246780.0],
        ["Estratégia", 63380.0],
        ["Jogo de Representação", 37830.0],
        ["Aventura", 10350.0],
        ["Corrida", 8390.0],
        ["Independente", 8110.0],
        ["Acessíveis ao Grande Público", 2240.0],
        ["Publicados na Web", 100.0],
        ["Utilidades", 20.0],
      ]);

      let options = {
        height: 380,
        chartArea: { left: 200 },
        backgroundColor: "#32003a",
        curveType: "function",
        colors: ["#99ed06"],
        pointSize: 5,
        series: { pointShape: "circle" },
        legend: { position: "none" },
        hAxis: {
          title: "GÊNEROS",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        vAxis: {
          title: "DOWNLOADS",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.visualization.LineChart(
        document.getElementById("downloads-genres")
      );

      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(genresAge);

    function genresAge() {
      let data = google.visualization.arrayToDataTable([
        ["GÊNEROS", "IDADE MÍNIMA"],
        ["Ação", 18],
        ["Violência; Estratégia", 18],
        ["Ação; Aventura", 18],
        ["Ação; RPG", 18],
        ["Ação; Simulação", 18],
      ]);

      let options = {
        chartArea: { height: 250 },
        height: 380,
        backgroundColor: "#32003a",
        pointSize: 5,
        series: { pointShape: "circle" },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "GÊNEROS",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        vAxis: {
          minValue: 0,
          title: "IDADE MÍNIMA",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.visualization.AreaChart(
        document.getElementById("genres-age")
      );
      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(developerAction);

    function developerAction() {
      let data = google.visualization.arrayToDataTable([
        ["DESENVOLVEDORA", "QUANTIDADE DE JOGOS DE AÇÃO"],
        ["Valve", 19],
        ["Ubisoft Montreal", 14],
        ["id Software", 14],
        ["NovaLogic", 9],
        ["Rebellion", 8],
        ["Capcom", 8],
        ["Gaijin Games", 7],
        ["Bohemia Interactive", 7],
        ["Crystal Dynamics", 7],
        ["Sigma Team Inc.", 7],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        chartArea: {
          left: 350,
          height: "60%",
          width: "60%",
        },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "QUANTIDADE DE JOGOS DE AÇÃO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          minValue: 0,
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
        vAxis: {
          title: "DESENVOLVEDORA",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
      };

      let chart = new google.visualization.BarChart(
        document.getElementById("developer-action")
      );

      chart.draw(data, options);
    }
  }

  findByDate(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Quais anos tiveram mais jogos lançados entre os últimos 10 anos?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="launch-date">data de lançamento</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="ten-years"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      Na última década, a maioria dos jogos foram lançados entre os anos de 2014, 2012 e 2013,
                      com maior destaque a 2013.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/games-ten-years-graphics.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/games-ten-years-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>`;

    google.charts.setOnLoadCallback(tenYears);

    function tenYears() {
      let data = google.visualization.arrayToDataTable([
        ["IDADE MÍNIMA", "CONTAGEM"],
        ["2012", 310],
        ["2013", 362],
        ["2014", 198],
        ["2015", 61],
        ["2016", 31],
        ["2017", 16],
        ["2018", 10],
        ["2019", 4],
      ]);

      let options = {
        chartArea: { height: 350 },
        height: 380,
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: "white",
        },
        backgroundColor: "#32003a",
        fontName: "Verdana",
        legend: {
          position: "left",
          alignment: "center",
          textStyle: { color: "#FFFFFF" },
        },
      };

      let chart = new google.visualization.PieChart(
        document.getElementById("ten-years")
      );
      chart.draw(data, options);
    }
  }

  findByTags(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-tag-assassin-age">
      <div class="card-question">
          <h1>
              Quais jogos sem classificação mínima de idade possuem a tag "Assassin" e qual o tempo médio de jogo
              dedicado a eles?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="playtime">tempo de jogo</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="tags">tags</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="age">idade recomendada</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="assassin"><div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      De acordo com a análise, há pelo menos 2 jogos sem idade mínima e com a tag "Assassin" que
                      possuem mais de 2.000 horas de gameplay em média. Dentre eles, destaca-se Counter-Strike,
                      com
                      uma média que ultrapassa a marca de 14.000.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/tag-assassin-required-age-graphics.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/tag-assassin-required-age-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>
  <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Qual é a quantidade de jogos e seus preços com as categorias 'Competitivo' e 'cross-platform'?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/competitive-cross-platform-graphic.png" alt="">
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            Apenas 1 jogo competitivo possui a possibilidade de ser jogado em 'cross-platform':
                            'Counter-Strike: Source'. Além disso, ele conta com um preço acessível.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/competitive-cross-platform-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/competitive-cross-platform-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Qual é a quantidade de jogos que possuem a categoria ou o gênero 'Ação', por desenvolvedora? (entre
                    as
                    10
                    primeiras)
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="developer">desenvolvedora</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="genres">gêneros</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="developer-action"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            A 'Valve' lidera a lista com jogos de ação, seguida da 'Ubisoft Montreal' e a 'Id Software'.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/action-games-per-developer-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/action-games-per-developer-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
  `;

    google.charts.setOnLoadCallback(assassin);

    function assassin() {
      let data = google.visualization.arrayToDataTable([
        ["NOME DO JOGO", "TEMPO MÉDIO"],
        ["Counter-Strike", 17612],
        [`Assassin's Creed IV Black Flag`, 3234],
        [`Assassin'S Creed 2 Deluxe Edition`, 1046],
        ["Dishonored", 749],
        [`Assassin's Creed: Director's Cut Edition`, 360],
        ["Styx: Master of Shadows", 243],
        ["The Ship: Murder Party", 233],
        ["Velvet Assassin", 9],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        chartArea: {
          left: 350,
          height: "60%",
          width: "60%",
        },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "TEMPO MÉDIO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          minValue: 0,
          maxValue: 18000,
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
        vAxis: {
          title: "NOME DO JOGO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
      };
      let chart = new google.visualization.BarChart(
        document.getElementById("assassin")
      );

      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(developerAction);

    function developerAction() {
      let data = google.visualization.arrayToDataTable([
        ["DESENVOLVEDORA", "QUANTIDADE DE JOGOS DE AÇÃO"],
        ["Valve", 19],
        ["Ubisoft Montreal", 14],
        ["id Software", 14],
        ["NovaLogic", 9],
        ["Rebellion", 8],
        ["Capcom", 8],
        ["Gaijin Games", 7],
        ["Bohemia Interactive", 7],
        ["Crystal Dynamics", 7],
        ["Sigma Team Inc.", 7],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        chartArea: {
          left: 350,
          height: "60%",
          width: "60%",
        },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "QUANTIDADE DE JOGOS DE AÇÃO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          minValue: 0,
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
        vAxis: {
          title: "DESENVOLVEDORA",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
      };

      let chart = new google.visualization.BarChart(
        document.getElementById("developer-action")
      );

      chart.draw(data, options);
    }
  }

  findByDeveloper(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Quais desenvolvedoras acumulam a maior quantidade de avaliações negativas?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="developer">desenvolvedora</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="ratings">avaliações</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="developer-ratings"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      A "Valve; Hidden Path Entertainment" acumula a maioria esmagadora de avaliações negativas.
                      Em
                      contraposição, a 'Chucklefish' acumula apenas 1.22% de avaliações negativas em seus jogos.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/developer-negative-ratings-graphics.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/developer-negative-ratings-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>
  <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Qual é a quantidade de jogos que possuem a categoria ou o gênero 'Ação', por desenvolvedora? (entre
                    as
                    10
                    primeiras)
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="developer">desenvolvedora</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="genres">gêneros</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="developer-action"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            A 'Valve' lidera a lista com jogos de ação, seguida da 'Ubisoft Montreal' e a 'Id Software'.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/action-games-per-developer-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/action-games-per-developer-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Quais jogos possuem uma descrição, e quais são as suas desenvolvedoras?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="description">descrição</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="developer">desenvolvedora</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/games-description-developer-table.png" alt="">
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            Poucos jogos possuem descrição, sendo a grande maioria deles desenvolvido pela Valve.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/games-description-developer-table.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/games-description-developer-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
  `;
    google.charts.setOnLoadCallback(developerRatings);

    function developerRatings() {
      let data = google.visualization.arrayToDataTable([
        ["DESENVOLVEDORA", "AVALIAÇÕES NEGATIVAS"],
        ["Valve; Hidden Path Entertainment", 402.313],
        ["OVERKILL", 56.523],
        ["RETO MOTO", 34.416],
        ["Rockstar North", 18.926],
        ["The Fun Pimps", 16.905],
        ["Expansive Worlds", 15.403],
        ["Rocksteady Studios", 12.981],
        ["Relic Entertainment", 12.038],
        ["Little Orbit", 11.779],
        ["Gearbox Software", 11.021],
        ["Torn Banner Studios", 10.939],
        ["Phosphor Games Studio", 10.167],
        ["Endnight Games Ltd", 8.881],
        ["Sledgehammer Games", 8.379],
        ["Chucklefish", 7.816],
      ]);

      let options = {
        chartArea: { height: 350 },
        height: 380,
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: "white",
        },
        backgroundColor: "#32003a",
        fontName: "Verdana",
        legend: { position: "left", textStyle: { color: "#FFFFFF" } },
      };

      let chart = new google.visualization.PieChart(
        document.getElementById("developer-ratings")
      );
      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(developerAction);

    function developerAction() {
      let data = google.visualization.arrayToDataTable([
        ["DESENVOLVEDORA", "QUANTIDADE DE JOGOS DE AÇÃO"],
        ["Valve", 19],
        ["Ubisoft Montreal", 14],
        ["id Software", 14],
        ["NovaLogic", 9],
        ["Rebellion", 8],
        ["Capcom", 8],
        ["Gaijin Games", 7],
        ["Bohemia Interactive", 7],
        ["Crystal Dynamics", 7],
        ["Sigma Team Inc.", 7],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        chartArea: {
          left: 350,
          height: "60%",
          width: "60%",
        },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "QUANTIDADE DE JOGOS DE AÇÃO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          minValue: 0,
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
        vAxis: {
          title: "DESENVOLVEDORA",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
      };

      let chart = new google.visualization.BarChart(
        document.getElementById("developer-action")
      );

      chart.draw(data, options);
    }
  }

  findByPlaytime(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-tag-assassin-age">
      <div class="card-question">
          <h1>
              Quais jogos sem classificação mínima de idade possuem a tag "Assassin" e qual o tempo médio de jogo
              dedicado a eles?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="playtime">tempo de jogo</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="tags">tags</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="age">idade recomendada</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="assassin"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      De acordo com a análise, há pelo menos 2 jogos sem idade mínima e com a tag "Assassin" que
                      possuem mais de 2.000 horas de gameplay em média. Dentre eles, destaca-se Counter-Strike,
                      com
                      uma média que ultrapassa a marca de 14.000.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/tag-assassin-required-age-graphics.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/tag-assassin-required-age-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>
  `;

    google.charts.setOnLoadCallback(assassin);

    function assassin() {
      let data = google.visualization.arrayToDataTable([
        ["NOME DO JOGO", "TEMPO MÉDIO"],
        ["Counter-Strike", 17612],
        [`Assassin's Creed IV Black Flag`, 3234],
        [`Assassin'S Creed 2 Deluxe Edition`, 1046],
        ["Dishonored", 749],
        [`Assassin's Creed: Director's Cut Edition`, 360],
        ["Styx: Master of Shadows", 243],
        ["The Ship: Murder Party", 233],
        ["Velvet Assassin", 9],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        chartArea: {
          left: 350,
          height: "60%",
          width: "60%",
        },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "TEMPO MÉDIO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          minValue: 0,
          maxValue: 18000,
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
        vAxis: {
          title: "NOME DO JOGO",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
      };
      let chart = new google.visualization.BarChart(
        document.getElementById("assassin")
      );

      chart.draw(data, options);
    }
  }

  findByDescription(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Quais jogos possuem uma descrição, e quais são as suas desenvolvedoras?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="description">descrição</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="developer">desenvolvedora</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/games-description-developer-table.png" alt="">
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      Poucos jogos possuem descrição, sendo a grande maioria deles desenvolvido pela Valve.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/games-description-developer-table.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/games-description-developer-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>`;
  }

  findBySupp(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Quantos jogos possuem um website oficial para suporte?
          </h1>
          <div class="card-categories">
            <div class="category-btn-sm-lg">
                  <button id="supp">suporte</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="website"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      A maioria esmagadora de jogos não possui website oficial para suporte, o que pode ser
                      prejudicial para os jogadores.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/games-with-website-graphic.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/games-with-website-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>
  <section class="container d-flex flex-colum card-section" id="question-price-ratings">
            <div class="card-question">
                <h1>
                    Dos jogos que possuem e-mail de suporte, há mais avaliações positivas ou negativas?
                </h1>
                <div class="card-categories">
                    <div class="category-btn-sm-lg">
                        <button id="supp">suporte</button>
                    </div>
                    <div class="category-btn-sm-lg">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <div id="email"></div>
                </div>
                <div class="card-subtitle">
                    <div class="card-description">
                        <p>
                            Há um considerável aumento de avaliações positivas nos jogos que possuem e-mail de suporte.
                        </p>
                    </div>
                    <div class="card-btn-section">
                        <button><a href="./assets/graphics/games-support-email-query-graphic.png" download>Baixar
                                imagem</a></button>
                        <button><a href="./queries/read-database/games-support-email-query.sql" download>Baixar
                                query</a></button>
                    </div>
                </div>
            </div>
        </section>
  `;

    google.charts.setOnLoadCallback(website);

    function website() {
      let data = google.visualization.arrayToDataTable([
        ["WEBSITE", "QUANTIDADE DE JOGOS"],
        ["Não possui website", 138],
        ["Possui website", 1770],
      ]);

      let options = {
        height: 380,
        backgroundColor: "#32003a",
        chartArea: {
          left: 300,
          width: "60%",
        },
        legend: {
          position: "none",
        },
        hAxis: {
          title: "QUANTIDADE DE JOGOS",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          minValue: 0,
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
        vAxis: {
          title: "WEBSITE",
          titleTextStyle: { color: "#FFF", italic: false, fontName: "Verdana" },
          textStyle: { color: "#FFF", fontName: "Verdana" },
        },
      };

      let chart = new google.visualization.BarChart(
        document.getElementById("website")
      );

      chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(email);

    function email() {
      let data = google.visualization.arrayToDataTable([
        ["TIPO DE AVALIAÇÃO", "SOMA TOTAL", "MÉDIA GERAL"],
        ["POSITIVA", 3763.778, 3647.07],
        ["NEGATIVA", 644.446, 624.46],
      ]);

      let options = {
        chartArea: { height: 320 },
        height: 390,
        backgroundColor: "#32003a",
        colors: ["#faf170"],
        hAxis: {
          title: "MÉDIA",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        vAxis: {
          title: "QUANTIDADE",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        bubble: {
          textStyle: {
            fontSize: 10,
            fontName: "Verdana",
            color: "black",
            bold: false,
            italic: false,
            auraColor: "none",
          },
        },
      };

      let chart = new google.visualization.BubbleChart(
        document.getElementById("email")
      );
      chart.draw(data, options);
    }
  }

  findByDownloads(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Qual a quantidade acumulada de downloads de jogos de acordo com o gênero (separado por gêneros
              individuais)?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm-lg">
                  <button id="downloads">quantidade de downloads</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="genres">gêneros</button>
              </div>
          </div>
          <div class="card-graphic">
              <div id="downloads-genres"></div>
          </div>
          <div class="card-subtitle">
              <div class="card-description">
                  <p>
                      O gênero 'Ação' é disparadamente o mais procurado entre os jogadores, seguido de
                      'Estratégia'.
                      Em contraposto, há pouquíssimos downloads de 'Utilidades'.
                  </p>
              </div>
              <div class="card-btn-section">
                  <button><a href="./assets/graphics/games-genres-downloads-graphics.png" download>Baixar
                          imagem</a></button>
                  <button><a href="./queries/read-database/games-genres-downloads-query.sql" download>Baixar
                          query</a></button>
              </div>
          </div>
      </div>
  </section>`;
    google.charts.setOnLoadCallback(downloadsGenres);

    function downloadsGenres() {
      let data = google.visualization.arrayToDataTable([
        ["GÊNEROS", "DOWNLOADS"],
        ["Ação", 246780.0],
        ["Estratégia", 63380.0],
        ["Jogo de Representação", 37830.0],
        ["Aventura", 10350.0],
        ["Corrida", 8390.0],
        ["Independente", 8110.0],
        ["Acessíveis ao Grande Público", 2240.0],
        ["Publicados na Web", 100.0],
        ["Utilidades", 20.0],
      ]);

      let options = {
        height: 380,
        chartArea: { left: 200 },
        backgroundColor: "#32003a",
        curveType: "function",
        colors: ["#99ed06"],
        pointSize: 5,
        series: { pointShape: "circle" },
        legend: { position: "none" },
        hAxis: {
          title: "GÊNEROS",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
        vAxis: {
          title: "DOWNLOADS",
          titleTextStyle: {
            color: "#FFF",
            italic: false,
          },
          textStyle: {
            color: "#FFF",
            fontName: "Verdana",
          },
        },
      };

      let chart = new google.visualization.LineChart(
        document.getElementById("downloads-genres")
      );

      chart.draw(data, options);
    }
  }
}

export default CardsView;
