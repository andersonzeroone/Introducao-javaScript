const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: ' Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos:[{
        nome:'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoALuno = aluno => aluno.nota
const getNotaDaTurma  = turma => turma.alunos.map(getNotaDoALuno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)