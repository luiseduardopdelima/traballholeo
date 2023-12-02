describe('Trabalho Final Teste de Software', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {

    return false;
  });

  it('Reservar Hotel', () => {
    cy.visit('https://projetoweb1hoteljpand.000webhostapp.com/index.php')
    cy.wait(1000)
    cy.xpath('/html/body/main/section/div[1]/div/div/a').click();
    cy.xpath('/html/body/main/div/section/div[2]/a').click();
    cy.xpath('/html/body/main/section/form/button').click();
    cy.xpath('/html/body/section/form/div[1]/input').type('luis bonitao');
    cy.xpath('/html/body/section/form/div[2]/input').type('luis@bonitao.com');
    cy.xpath('/html/body/section/form/div[3]/div/input').type('2000-11-23');
    cy.xpath('/html/body/section/form/div[5]/input').type('1');
    cy.xpath('/html/body/section/form/div[6]/div/input').check();
    cy.xpath('/html/body/section/form/div[7]/center/button').click();
  })

  it('Ver Quarto', () => {
    cy.visit('https://projetoweb1hoteljpand.000webhostapp.com/index.php')
    cy.wait(1000)
    cy.xpath('/html/body/main/section/a').click();
    cy.url().should('eq', 'https://projetoweb1hoteljpand.000webhostapp.com/client/roomavailable.php');

  })

  it('Adicionar Quarto', () => {
    cy.visit('https://projetoweb1hoteljpand.000webhostapp.com/index.php')
    cy.wait(1000)
    cy.xpath('/html/body/main/section/div[2]/a').click();
    cy.xpath('/html/body/center/section/div[1]/a').click();
    cy.xpath('/html/body/section/form/div[1]/input').type('Harem do Diego');
    cy.xpath('/html/body/section/form/div[2]/textarea').type('Ótimo quarto para um casal bem quente');
    cy.xpath('/html/body/section/form/div[3]/textarea').type('100');
    cy.get('input[type="file"]').attachFile('../img/racoon.jpg');
    cy.xpath('/html/body/section/form/div[5]/button').click();
    cy.url().should('eq', 'https://projetoweb1hoteljpand.000webhostapp.com/index.php');
    //adicionando o quarto e verificando se é enviado até o index, como padrão
  })

  it('Logar como Admin', () => {
    cy.visit('https://projetoweb1hoteljpand.000webhostapp.com/index.php')
    cy.wait(1000)
    cy.xpath('/html/body/header/form/input[1]').type('admin');
    cy.xpath('/html/body/header/form/input[2]').type('123');
    cy.xpath('/html/body/header/form/button').click();
    cy.url().should('eq', 'https://projetoweb1hoteljpand.000webhostapp.com/dashboard.php');
    //botando um login e senha qualquer e validando se vai até o dashboard pois nao sei o login e senha
  })

  it('Verifica se o Harem do Diego existe', () => {
    cy.visit('https://projetoweb1hoteljpand.000webhostapp.com/index.php')
    cy.wait(1000)
    cy.xpath('/html/body/main/section/a').click();
    //verifica se está na pagina de quartos
    cy.url().should('eq', 'https://projetoweb1hoteljpand.000webhostapp.com/client/roomavailable.php');
    //verifica se existe o harem do diego
    cy.contains('Quarto #Harem do Diego').should('exist');
  })
})