export interface DirectController<InputData, OutputData> {
  handle(input: InputData): Promise<OutputData>
}
