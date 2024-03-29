import FilaPrioridade from "../src/FilaPrioridade";

let fp

beforeEach(() => {
    fp = new FilaPrioridade()
})

test('Add test',()=>{
    fp.add(1,80)
    fp.add(2,50)
    fp.add(1,70)
    fp.add(1,70)
    expect(fp.lastInput()).toBe(50)
})

test('Remove test',()=>{
    fp.add(1,80)
    fp.add(2,50)
    fp.add(1,70)
    fp.add(1,70)
    expect(fp.remove()).toBe(80)
    expect(fp.lastInput()).toBe(50)
})

test('asArray test',()=>{
    fp.add(1,80)
    fp.add(2,50)
    fp.add(3,70)
    fp.add(4,70)
    expect(fp.asArray()).toBe('80707050')
})