/** Internal execution controls; never include these in tool arguments or API payloads. */
export interface ToolExecutionContext {
  signal?: AbortSignal;
}
