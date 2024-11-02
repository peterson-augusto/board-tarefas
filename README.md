Olá, gostaria de compartilhar meu primeiro projeto feito com NextJs, TypeScript e firebase como db.

COMO FUNCIONA?
O sistema possui uma tela inicial mostrando os posts das tarefas que já existem e seus comentários, onde você precisa entrar com sua conta do Gmail para poder usar o site, esse recurso de autenticação é graças ao NextAuth, onde tem toda a documentação e os recursos que usei, que no caso foi o provedor do próprio Google, uma vez logado você vai ter acesso ao seu dashboard e é lá onde vai ficar todas as suas tarefas postadas, e é onde você vai poder fazer novos posts.

POSTAR TAREFA -
Quando você já estiver logado e estiver no dashboard, terá uma caixa de texto onde você pode postar sua tarefa, lá você pode deixar a sua tarefa como pública se quiser, só marcar a checkbox, assim sua tarefa ficará pública para todos verem e até adicionarem comentários e terá a função de copiar o link da sua tarefa para ser compartilhada e assim poder acessá-la, ou você pode não marcar a opção de deixar a tarefa pública e a tarefa simplesmente é postada e ficará privada onde poderá só ser vista, e não poderá ser comentada e nem compartilhada, somente a opção de excluir.

AUTENTICAÇÃO DE USUÁRIO
Basicamente cada usuário logado no sistema vai ter seu próprio dashboard com suas tarefas individualmente, onde um poderá ver a tarefa do outro e dependendo, eles poderão comentar e interagir com a tarefa do outro, e para trocar o usuário basta sair, e quando entrar fazer um novo login, simples!

Nesse projeto, usei o SSR(Server Side Rendering), que busca as informações do servidor e traz para o componente, então quando o usuário acessa o site ele passa primeiro pelo lado do servidor, que passa pelo Server Side Props que foi criado, então o Server Side Props faz essa requisição, traz o resultado para o usuário e o envia em forma de Java Script para o Browser, que baixa o JS já com o resultado da requisição, então o browser executa todo o React para o usuário e entrega a página pronta, que já está carregada e não tem nenhum efeito de Loading ou nenhum tipo de carregamento, porque a requisição já foi feita no Servidor.

POR TRÁS DAS REQUISIÇÕES
-> O usuário entrando na página, ele passa pelo Server Size (getStaticProps), e lá ele pode fazer uma requisição, como por exemplo os dados do post e de quantos comentários ele tem, então ele vai até o servidor, faz a requisição e envia para o browser e faz a renderização com os dados.

-> Se um outro usuário entrar novamente nesse mesmo site e ainda não tiver passado 60 segundos de revalidação da página (revalidate), não vai haver uma nova requisição e entrega a página estática que já está pronta, então no caso quem gerou essa página estática e quem teve que fazer a requisição foi o primeiro usuário que entrou. (PAREI AQUI)
Bom, se o João entrou no Site e já se passou 60 segundos, vai ativar o getStaticProps novamente, faz a requisição HTTP novamente, busca os dados requiridos pelo usuário, devolve pro componente e gera uma nova html atualizada com dados mais recentes, havendo assim a revalidação, e segue esse padrão assim por diante.

Essa é uma vantagem do recurso do Next, porque você não é necessário os dados "frescos" toda hora, e poupa requisições desnecessárias que podem influenciar na performance do sistema, 

(basicamente esse é o processo que acontece de forma muito rápida)
