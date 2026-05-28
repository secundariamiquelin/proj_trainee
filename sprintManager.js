// Simulação simples de gestão de Sprint

class SprintManager {
  constructor() {
    this.issues = [];
  }

  adicionarIssue(titulo, responsavel) {
    const issue = {
      id: this.issues.length + 1,
      titulo,
      responsavel,
      status: "TODO"
    };

    this.issues.push(issue);

    console.log(`Issue criada: ${titulo}`);
  }

  concluirIssue(id) {
    const issue = this.issues.find(i => i.id === id);

    if (!issue) {
      console.log("Issue não encontrada.");
      return;
    }

    issue.status = "DONE";
    console.log(`Issue "${issue.titulo}" concluída.`);
  }

  listarIssues() {
    console.log("\n=== Backlog da Sprint ===");

    this.issues.forEach(issue => {
      console.log(
        `#${issue.id} - ${issue.titulo} | Responsável: ${issue.responsavel} | Status: ${issue.status}`
      );
    });
  }
}

// Simulação de uso
const sprint = new SprintManager();

sprint.adicionarIssue("Criar README e POPs", "Gabriel");
sprint.adicionarIssue("Configurar linter", "João");
sprint.adicionarIssue("Criar template da Sprint", "Maria");

sprint.concluirIssue(1);

sprint.listarIssues();
