


describe("Storage", function(){
    var storage;

    beforeEach(function(){
        storage = new Storage();
    });

    describe("saveCurrentList", function(){

        it('should save the given lists as current list', function(){
            var list = {
                name: 'listy',
                tasks: []
            };

            storage.saveCurrentList(list);

            expect(storage.getCurrentList()).toEqual(list);
        })
    });

    describe('saveLists', function(){

        it('should save the given lists', function(){
            var lists = [
                {
                 name: 'listy',
                 tasks: []
                },
                {
                 name: 'listo',
                 tasks: []
                }
            ];
            storage.saveLists(lists);

            expect(storage.getLists()).toEqual(list);
        })
    })
});