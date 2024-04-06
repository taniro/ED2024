import Heap from "../src/Heap";

let h;

beforeEach(
    () => {
        h = new Heap();
    }
);

test("adicioando elementos", 
    () => {
        h.insert(1, 5)
        h.insert(2, 1)
        h.insert(3, 4)
        h.insert(4, 8)
        console.log(h.toArray())
    }
)

test("Removendo elementos", 
    () => {
        h.insert(1, 5)
        h.insert(2, 1)
        h.insert(3, 4)
        h.insert(4, 8)
        h.insert(5, 21)
        h.insert(6, 13)
        h.insert(7, 0)
        console.log(h.toArray())
        h.remove()
        console.log(h.toArray())
        h.remove()
        console.log(h.toArray())
        h.remove()
        console.log(h.toArray())
        h.remove()
        console.log(h.toArray())
        h.remove()
        console.log(h.toArray())
        h.remove()
        console.log(h.toArray())
    }
)
