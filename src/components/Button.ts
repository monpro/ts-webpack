export class Button {
    constructor(private text: string) {}
    render(): string {
        return `<button>${this.text}</button>`;
    }
}