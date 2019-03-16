export class Task {
  constructor(
    public callback: CallableFunction = () => null,
    public args: Array<Object> = []
  ) {}
}
