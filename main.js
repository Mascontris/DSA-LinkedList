const {
    LinkedList, 
    display, 
    size,
    isEmpty,
    findPrevious,
    findLast,
    reverse} = require('./LinkedList')

const SLL = new LinkedList()

function main() {

    console.log(isEmpty(SLL))

    display(SLL)
    SLL.insertLast('Apollo')
    display(SLL)
    SLL.insertLast('Boomer')
    display(SLL)
    SLL.insertLast('Helo')
    display(SLL)
    SLL.insertLast('Husker')
    display(SLL)
    SLL.insertLast('Starbuck')
    display(SLL)
    SLL.insertLast('Tauhida')
    display(SLL)

    SLL.remove('Husker')
    display(SLL)

    SLL.insertBefore('Athen', 'Boomer')
    display(SLL)

    SLL.insertAfter('Hotdog', 'Helo')
    display(SLL)

    SLL.insertAt('Kat', 3)
    display(SLL)
    
    SLL.remove('Tauhida')
    display(SLL)

    console.log(size(SLL))

    console.log(isEmpty(SLL))

    console.log(findPrevious(SLL, 'Boomer'))

    console.log(findLast(SLL))

    console.log(reverse(SLL))
    
}

main()

