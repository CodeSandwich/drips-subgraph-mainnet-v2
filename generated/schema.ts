// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class FundingProject extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("projectOwner", Value.fromBytes(Bytes.empty()));
    this.set("dripsTokenTemplate", Value.fromBytes(Bytes.empty()));
    this.set("blockTimestampCreated", Value.fromBigInt(BigInt.zero()));
    this.set("daiCollected", Value.fromBigInt(BigInt.zero()));
    this.set("daiSplit", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FundingProject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FundingProject entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FundingProject", id.toString(), this);
    }
  }

  static load(id: string): FundingProject | null {
    return changetype<FundingProject | null>(store.get("FundingProject", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get projectName(): string | null {
    let value = this.get("projectName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set projectName(value: string | null) {
    if (!value) {
      this.unset("projectName");
    } else {
      this.set("projectName", Value.fromString(<string>value));
    }
  }

  get projectOwner(): Bytes {
    let value = this.get("projectOwner");
    return value!.toBytes();
  }

  set projectOwner(value: Bytes) {
    this.set("projectOwner", Value.fromBytes(value));
  }

  get dripsTokenTemplate(): Bytes {
    let value = this.get("dripsTokenTemplate");
    return value!.toBytes();
  }

  set dripsTokenTemplate(value: Bytes) {
    this.set("dripsTokenTemplate", Value.fromBytes(value));
  }

  get blockTimestampCreated(): BigInt {
    let value = this.get("blockTimestampCreated");
    return value!.toBigInt();
  }

  set blockTimestampCreated(value: BigInt) {
    this.set("blockTimestampCreated", Value.fromBigInt(value));
  }

  get daiCollected(): BigInt {
    let value = this.get("daiCollected");
    return value!.toBigInt();
  }

  set daiCollected(value: BigInt) {
    this.set("daiCollected", Value.fromBigInt(value));
  }

  get daiSplit(): BigInt {
    let value = this.get("daiSplit");
    return value!.toBigInt();
  }

  set daiSplit(value: BigInt) {
    this.set("daiSplit", Value.fromBigInt(value));
  }

  get tokenTypes(): Array<string> {
    let value = this.get("tokenTypes");
    return value!.toStringArray();
  }

  set tokenTypes(value: Array<string>) {
    this.set("tokenTypes", Value.fromStringArray(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get ipfsHash(): string | null {
    let value = this.get("ipfsHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsHash(value: string | null) {
    if (!value) {
      this.unset("ipfsHash");
    } else {
      this.set("ipfsHash", Value.fromString(<string>value));
    }
  }
}

export class TokenType extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenRegistryAddress", Value.fromBytes(Bytes.empty()));
    this.set("tokenTypeId", Value.fromBigInt(BigInt.zero()));
    this.set("streaming", Value.fromBoolean(false));
    this.set("limit", Value.fromBigInt(BigInt.zero()));
    this.set("minAmtPerSec", Value.fromBigInt(BigInt.zero()));
    this.set("fundingProject", Value.fromString(""));
    this.set("currentTotalAmtPerSec", Value.fromBigInt(BigInt.zero()));
    this.set("currentTotalGiven", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenType entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenType entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenType", id.toString(), this);
    }
  }

  static load(id: string): TokenType | null {
    return changetype<TokenType | null>(store.get("TokenType", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenRegistryAddress(): Bytes {
    let value = this.get("tokenRegistryAddress");
    return value!.toBytes();
  }

  set tokenRegistryAddress(value: Bytes) {
    this.set("tokenRegistryAddress", Value.fromBytes(value));
  }

  get tokenTypeId(): BigInt {
    let value = this.get("tokenTypeId");
    return value!.toBigInt();
  }

  set tokenTypeId(value: BigInt) {
    this.set("tokenTypeId", Value.fromBigInt(value));
  }

  get streaming(): boolean {
    let value = this.get("streaming");
    return value!.toBoolean();
  }

  set streaming(value: boolean) {
    this.set("streaming", Value.fromBoolean(value));
  }

  get limit(): BigInt {
    let value = this.get("limit");
    return value!.toBigInt();
  }

  set limit(value: BigInt) {
    this.set("limit", Value.fromBigInt(value));
  }

  get minAmtPerSec(): BigInt {
    let value = this.get("minAmtPerSec");
    return value!.toBigInt();
  }

  set minAmtPerSec(value: BigInt) {
    this.set("minAmtPerSec", Value.fromBigInt(value));
  }

  get fundingProject(): string {
    let value = this.get("fundingProject");
    return value!.toString();
  }

  set fundingProject(value: string) {
    this.set("fundingProject", Value.fromString(value));
  }

  get ipfsHash(): string | null {
    let value = this.get("ipfsHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsHash(value: string | null) {
    if (!value) {
      this.unset("ipfsHash");
    } else {
      this.set("ipfsHash", Value.fromString(<string>value));
    }
  }

  get currentTotalAmtPerSec(): BigInt {
    let value = this.get("currentTotalAmtPerSec");
    return value!.toBigInt();
  }

  set currentTotalAmtPerSec(value: BigInt) {
    this.set("currentTotalAmtPerSec", Value.fromBigInt(value));
  }

  get currentTotalGiven(): BigInt {
    let value = this.get("currentTotalGiven");
    return value!.toBigInt();
  }

  set currentTotalGiven(value: BigInt) {
    this.set("currentTotalGiven", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("tokenRegistryAddress", Value.fromBytes(Bytes.empty()));
    this.set("tokenType", Value.fromString(""));
    this.set("tokenReceiver", Value.fromBytes(Bytes.empty()));
    this.set("rank", Value.fromBigInt(BigInt.zero()));
    this.set("amtPerSec", Value.fromBigInt(BigInt.zero()));
    this.set("giveAmt", Value.fromBigInt(BigInt.zero()));
    this.set("fundingProject", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenRegistryAddress(): Bytes {
    let value = this.get("tokenRegistryAddress");
    return value!.toBytes();
  }

  set tokenRegistryAddress(value: Bytes) {
    this.set("tokenRegistryAddress", Value.fromBytes(value));
  }

  get tokenType(): string {
    let value = this.get("tokenType");
    return value!.toString();
  }

  set tokenType(value: string) {
    this.set("tokenType", Value.fromString(value));
  }

  get tokenReceiver(): Bytes {
    let value = this.get("tokenReceiver");
    return value!.toBytes();
  }

  set tokenReceiver(value: Bytes) {
    this.set("tokenReceiver", Value.fromBytes(value));
  }

  get rank(): BigInt {
    let value = this.get("rank");
    return value!.toBigInt();
  }

  set rank(value: BigInt) {
    this.set("rank", Value.fromBigInt(value));
  }

  get amtPerSec(): BigInt {
    let value = this.get("amtPerSec");
    return value!.toBigInt();
  }

  set amtPerSec(value: BigInt) {
    this.set("amtPerSec", Value.fromBigInt(value));
  }

  get giveAmt(): BigInt {
    let value = this.get("giveAmt");
    return value!.toBigInt();
  }

  set giveAmt(value: BigInt) {
    this.set("giveAmt", Value.fromBigInt(value));
  }

  get fundingProject(): string {
    let value = this.get("fundingProject");
    return value!.toString();
  }

  set fundingProject(value: string) {
    this.set("fundingProject", Value.fromString(value));
  }
}

export class DripsConfig extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("balance", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DripsConfig entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DripsConfig entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DripsConfig", id.toString(), this);
    }
  }

  static load(id: string): DripsConfig | null {
    return changetype<DripsConfig | null>(store.get("DripsConfig", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dripsEntries(): Array<string> {
    let value = this.get("dripsEntries");
    return value!.toStringArray();
  }

  set dripsEntries(value: Array<string>) {
    this.set("dripsEntries", Value.fromStringArray(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class DripsEntry extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("dripsConfig", Value.fromString(""));
    this.set("isAccountDrip", Value.fromBoolean(false));
    this.set("account", Value.fromBigInt(BigInt.zero()));
    this.set("receiver", Value.fromBytes(Bytes.empty()));
    this.set("amtPerSec", Value.fromBigInt(BigInt.zero()));
    this.set("endTime", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DripsEntry entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DripsEntry entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DripsEntry", id.toString(), this);
    }
  }

  static load(id: string): DripsEntry | null {
    return changetype<DripsEntry | null>(store.get("DripsEntry", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get dripsConfig(): string {
    let value = this.get("dripsConfig");
    return value!.toString();
  }

  set dripsConfig(value: string) {
    this.set("dripsConfig", Value.fromString(value));
  }

  get isAccountDrip(): boolean {
    let value = this.get("isAccountDrip");
    return value!.toBoolean();
  }

  set isAccountDrip(value: boolean) {
    this.set("isAccountDrip", Value.fromBoolean(value));
  }

  get account(): BigInt {
    let value = this.get("account");
    return value!.toBigInt();
  }

  set account(value: BigInt) {
    this.set("account", Value.fromBigInt(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    return value!.toBytes();
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get amtPerSec(): BigInt {
    let value = this.get("amtPerSec");
    return value!.toBigInt();
  }

  set amtPerSec(value: BigInt) {
    this.set("amtPerSec", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value!.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }
}

export class SplitsConfig extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("receiverAddresses", Value.fromBytesArray(new Array(0)));
    this.set("receiverPercentages", Value.fromBigIntArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SplitsConfig entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save SplitsConfig entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("SplitsConfig", id.toString(), this);
    }
  }

  static load(id: string): SplitsConfig | null {
    return changetype<SplitsConfig | null>(store.get("SplitsConfig", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiverAddresses(): Array<Bytes> {
    let value = this.get("receiverAddresses");
    return value!.toBytesArray();
  }

  set receiverAddresses(value: Array<Bytes>) {
    this.set("receiverAddresses", Value.fromBytesArray(value));
  }

  get receiverPercentages(): Array<BigInt> {
    let value = this.get("receiverPercentages");
    return value!.toBigIntArray();
  }

  set receiverPercentages(value: Array<BigInt>) {
    this.set("receiverPercentages", Value.fromBigIntArray(value));
  }
}
