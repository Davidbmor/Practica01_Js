export class Note {
    constructor(id, content, creationDate, type) {
        this.id = id;
        this.content = content;
        this.creationDate = creationDate;
        this.type = type;
    }



    get id() {
        return this._id;
    }

    set id(id) {    
        this._id = id;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    get content() {
        return this._content;
    }

    set content(content) {
        this._content = content;
    }

    get creationDate() {
        return this._creationDate;
    }

    set creationDate(creationDate) {
        this._creationDate = creationDate;
    }
}
