import {Host} from "./Host";

export class BlockInfo {
  host: Host
  isBlocked: boolean

  constructor(host: Host, isBlocked: boolean) {
    this.host = host
    this.isBlocked = isBlocked
  }
}

export class BlockInfos {
  blockInfos: Array<BlockInfo>

  constructor(blockInfos: Array<BlockInfo>) {
    this.blockInfos = blockInfos
  }
}
