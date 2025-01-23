export interface DirectController<InputData, OutputData> {
  /**
   * You can pass user and other data
   * using constructor(private user: User, ...) {}
   * in the implementation
   */

  handle(input: InputData): Promise<OutputData>
}
