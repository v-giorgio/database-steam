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
                <div class="category-btn-sm">
                    <button id="price">preço</button>
                </div>
                <div class="category-btn-sm">
                    <button id="ratings">avaliações</button>
                </div>
            </div>
            <div class="card-graphic">
                <img src="./assets/img/price-positive-ratings-graphic.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/games-genres-expensive-grafics.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm">
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
              <div class="category-btn-sm">
                  <button id="price">preço</button>
              </div>
              <div class="category-btn-sm">
                  <button id="ratings">avaliações</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/price-positive-ratings-graphic.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="language">linguagem</button>
                    </div>
                    <div class="category-btn-sm">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/english-positive-negative-ratings.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="supp">suporte</button>
                    </div>
                    <div class="category-btn-sm">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/games-support-email-graphic.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/developer-negative-ratings-graphics.png" alt="">
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
              <div class="category-btn-sm">
                  <button id="tags">tags</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="age">idade recomendada</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/tag-assassin-required-age-graphics.png" alt="">
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
                    <img src="./assets/img/min-required-age-query.graphic2.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/games-genres-age-graphics.png" alt="">
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
              <div class="category-btn-sm">
                  <button id="language">linguagem</button>
              </div>
              <div class="category-btn-sm">
                  <button id="ratings">avaliações</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/english-positive-negative-ratings.png" alt="">
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
  }

  findByGenres(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Quais os 10 jogos mais caros e quais os seus gêneros?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm">
                  <button id="price">preço</button>
              </div>
              <div class="category-btn-sm">
                  <button id="genres">gêneros</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/games-genres-expensive-grafics.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/games-genres-downloads-graphics.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="genres">gêneros</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/games-genres-age-graphics.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm">
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
                    <div class="category-btn-sm">
                        <button id="genres">gêneros</button>
                    </div>
                    <div class="category-btn-sm">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/action-games-per-developer-graphic.png" alt="">
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
              <img src="./assets/img/games-ten-years-graphics.png" alt="">
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
              <div class="category-btn-sm">
                  <button id="tags">tags</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="age">idade recomendada</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/tag-assassin-required-age-graphics.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="price">preço</button>
                    </div>
                    <div class="category-btn-sm">
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
                    <div class="category-btn-sm">
                        <button id="genres">gêneros</button>
                    </div>
                    <div class="category-btn-sm">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/action-games-per-developer-graphic.png" alt="">
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
              <div class="category-btn-sm">
                  <button id="ratings">avaliações</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/developer-negative-ratings-graphics.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="genres">gêneros</button>
                    </div>
                    <div class="category-btn-sm">
                        <button id="tags">tags</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/action-games-per-developer-graphic.png" alt="">
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
                    <div class="category-btn-sm">
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
              <div class="category-btn-sm">
                  <button id="tags">tags</button>
              </div>
              <div class="category-btn-sm-lg">
                  <button id="age">idade recomendada</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/tag-assassin-required-age-graphics.png" alt="">
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
  }

  findByDescription(section) {
    section.innerHTML = `<section class="container d-flex flex-colum card-section" id="question-price-ratings">
      <div class="card-question">
          <h1>
              Quais jogos possuem uma descrição, e quais são as suas desenvolvedoras?
          </h1>
          <div class="card-categories">
              <div class="category-btn-sm">
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
              <div class="category-btn-sm">
                  <button id="supp">suporte</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/games-with-website-graphic.png" alt="">
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
                    <div class="category-btn-sm">
                        <button id="supp">suporte</button>
                    </div>
                    <div class="category-btn-sm">
                        <button id="ratings">avaliações</button>
                    </div>
                </div>
                <div class="card-graphic">
                    <img src="./assets/img/games-support-email-graphic.png" alt="">
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
              <div class="category-btn-sm">
                  <button id="genres">gêneros</button>
              </div>
          </div>
          <div class="card-graphic">
              <img src="./assets/img/games-genres-downloads-graphics.png" alt="">
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
  }
}

export default CardsView;
