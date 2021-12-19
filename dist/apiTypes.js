"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const castable_1 = require("@bitr/castable");
class DepthResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(Array, Number),
    __metadata("design:type", Array)
], DepthResponse.prototype, "asks", void 0);
__decorate([
    castable_1.cast, castable_1.element(Array, Number),
    __metadata("design:type", Array)
], DepthResponse.prototype, "bids", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], DepthResponse.prototype, "timestamp", void 0);
exports.DepthResponse = DepthResponse;
class TickerResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TickerResponse.prototype, "sell", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TickerResponse.prototype, "buy", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TickerResponse.prototype, "high", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TickerResponse.prototype, "low", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TickerResponse.prototype, "last", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TickerResponse.prototype, "vol", void 0);
__decorate([
    castable_1.cast(Date),
    __metadata("design:type", Date)
], TickerResponse.prototype, "timestamp", void 0);
exports.TickerResponse = TickerResponse;
class Transaction extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Transaction.prototype, "transaction_id", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], Transaction.prototype, "side", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Transaction.prototype, "price", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    castable_1.cast(Date),
    __metadata("design:type", Date)
], Transaction.prototype, "executed_at", void 0);
exports.Transaction = Transaction;
class TransactionsResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(Transaction),
    __metadata("design:type", Array)
], TransactionsResponse.prototype, "transactions", void 0);
exports.TransactionsResponse = TransactionsResponse;
class CandleStick extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], CandleStick.prototype, "type", void 0);
__decorate([
    castable_1.cast, castable_1.element(Array, Number),
    __metadata("design:type", Array)
], CandleStick.prototype, "ohlcv", void 0);
exports.CandleStick = CandleStick;
class CandlestickResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(CandleStick),
    __metadata("design:type", Array)
], CandlestickResponse.prototype, "candlestick", void 0);
exports.CandlestickResponse = CandlestickResponse;
class Asset extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], Asset.prototype, "asset", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Asset.prototype, "amount_precision", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Asset.prototype, "onhand_amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Asset.prototype, "locked_amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Asset.prototype, "free_amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], Asset.prototype, "withdrawal_fee", void 0);
exports.Asset = Asset;
class AssetsResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(Asset),
    __metadata("design:type", Array)
], AssetsResponse.prototype, "assets", void 0);
exports.AssetsResponse = AssetsResponse;
class OrderModel extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], OrderModel.prototype, "order_id", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], OrderModel.prototype, "pair", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], OrderModel.prototype, "side", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], OrderModel.prototype, "type", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], OrderModel.prototype, "start_amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], OrderModel.prototype, "remaining_amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], OrderModel.prototype, "executed_amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], OrderModel.prototype, "price", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], OrderModel.prototype, "average_price", void 0);
__decorate([
    castable_1.cast(Date),
    __metadata("design:type", Date)
], OrderModel.prototype, "ordered_at", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], OrderModel.prototype, "status", void 0);
exports.OrderModel = OrderModel;
class SendOrderResponse extends OrderModel {
}
exports.SendOrderResponse = SendOrderResponse;
class GetOrderResponse extends OrderModel {
}
exports.GetOrderResponse = GetOrderResponse;
class CancelOrderResponse extends OrderModel {
}
exports.CancelOrderResponse = CancelOrderResponse;
class CancelOrdersResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(OrderModel),
    __metadata("design:type", Array)
], CancelOrdersResponse.prototype, "orders", void 0);
exports.CancelOrdersResponse = CancelOrdersResponse;
class OrdersInfoResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(OrderModel),
    __metadata("design:type", Array)
], OrdersInfoResponse.prototype, "orders", void 0);
exports.OrdersInfoResponse = OrdersInfoResponse;
class ActiveOrdersResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(OrderModel),
    __metadata("design:type", Array)
], ActiveOrdersResponse.prototype, "orders", void 0);
exports.ActiveOrdersResponse = ActiveOrdersResponse;
class TradeModel extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TradeModel.prototype, "trade_id", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], TradeModel.prototype, "pair", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TradeModel.prototype, "order_id", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], TradeModel.prototype, "side", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], TradeModel.prototype, "type", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TradeModel.prototype, "amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TradeModel.prototype, "price", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], TradeModel.prototype, "maker_taker", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TradeModel.prototype, "fee_amount_base", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], TradeModel.prototype, "fee_amount_quote", void 0);
__decorate([
    castable_1.cast(Date),
    __metadata("design:type", Date)
], TradeModel.prototype, "executed_at", void 0);
exports.TradeModel = TradeModel;
class TradeHistoryResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(TradeModel),
    __metadata("design:type", Array)
], TradeHistoryResponse.prototype, "trades", void 0);
exports.TradeHistoryResponse = TradeHistoryResponse;
class Account extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], Account.prototype, "uuid", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], Account.prototype, "label", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], Account.prototype, "address", void 0);
exports.Account = Account;
class WithdrawalAccountResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast, castable_1.element(Account),
    __metadata("design:type", Array)
], WithdrawalAccountResponse.prototype, "accounts", void 0);
exports.WithdrawalAccountResponse = WithdrawalAccountResponse;
class RequestWithdrawalResponse extends castable_1.Castable {
}
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], RequestWithdrawalResponse.prototype, "uuid", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], RequestWithdrawalResponse.prototype, "asset", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], RequestWithdrawalResponse.prototype, "amount", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], RequestWithdrawalResponse.prototype, "account_uuid", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", Number)
], RequestWithdrawalResponse.prototype, "fee", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], RequestWithdrawalResponse.prototype, "status", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], RequestWithdrawalResponse.prototype, "label", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], RequestWithdrawalResponse.prototype, "txid", void 0);
__decorate([
    castable_1.cast,
    __metadata("design:type", String)
], RequestWithdrawalResponse.prototype, "address", void 0);
exports.RequestWithdrawalResponse = RequestWithdrawalResponse;
