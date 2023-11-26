describe('Acesso ao sistema de teste', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Validar acesso ao site como admin', () => {
    cy.visit('https://projetohotelaria.000webhostapp.com/');
    cy.xpath('/html/body/nav/div/ul/li[2]/a').click();
    cy.xpath('/html/body/div[1]/div/div/div/div[2]/form/div[1]/input').type('admin');
    cy.xpath('/html/body/div[1]/div/div/div/div[2]/form/div[2]/input').type('123');
    cy.xpath('/html/body/div[1]/div/div/div/div[2]/form/button').click();
  });

  it('Inserção de um novo quarto', () => {
    
    cy.visit('https://projetohotelaria.000webhostapp.com/lista.php');
    
    cy.xpath('/html/body/section/div/form[1]/input[1]').type('103');
    cy.xpath('/html/body/section/div/form[1]/input[2]').type('149,99');
    cy.xpath('/html/body/section/div/form[1]/input[3]').type('25/11/2023');
    cy.xpath('/html/body/section/div/form[1]/input[4]').type('27/11/2023');
    cy.xpath('/html/body/section/div/form[1]/button').click();

  });

  it('Deleção de um quarto', () => {
    
    cy.visit('https://projetohotelaria.000webhostapp.com/lista.php');
    cy.xpath('/html/body/section/div/div/div[4]/form[2]/button').click();

  });

  it('Verificar a página da reserva', () => {
    
    cy.visit('https://projetohotelaria.000webhostapp.com/index.php');
    cy.xpath('/html/body/section[2]/div/div/div[3]/a').click();
    if (cy.url('https://projetohotelaria.000webhostapp.com/index.php')){
      print('Não passou para a reserva!')      
    }else{
      print('Passou para a reserva!')
    }

  });

  it('Realizar a reserva', () => {
    
    cy.visit('https://projetohotelaria.000webhostapp.com/quartos/paginaquarto3.php');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[1]/input').type('Leonardo Flores Maus');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[2]/input').type('2');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[3]/input').type('51 99999-9999');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[4]/input').type('teste@teste.com');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[5]/select').select('Cartão de Débito');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[6]/input').type('2023-01-01');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[7]/input').type('2023-01-01');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[1]/div[8]/input').type('1');
    cy.xpath('/html/body/div[1]/div/section/div/div/div/form/div[2]/button').click();

  });

});

  

