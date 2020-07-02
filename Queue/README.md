# **Queue**

Uma fila é um **tipo abstrato de dado** baseado no princípio de *First In, First Out* (**FIFO**).

[Implementação em JavaScript + P5.js](https://zaqueucavalcante.github.io/Data-Structures/Queue/)

É fundamentalmente composta por duas operações: 
- **enqueue** (enfileirar), que adiciona o elemento do *final* da fila; 
- **dequeue** (desemfileirar), que remove o *primeiro* elemento da fila;

## Aplicações

- São usadas quando um recurso é compartilhado por vários consumidores, por exemplo:
    - CPU and Disk scheduling;
    - Vários dispositivos enviando arquivos para uma mesma impressora;
- Quando dados são transferidos assíncronamente entre dois processos, por exemplo:
    - IO Buffers;
    - Pipes;
    - File IO;
- Em teclados, as teclas digitadas são armazenadas em um *buffer*, semelhante à uma fila, para que possam ser exibidas na tela na ordem correta;

## Extensões

- Deque (Double Ended Queue);
- Circular Queue;
- Priority Queue;
