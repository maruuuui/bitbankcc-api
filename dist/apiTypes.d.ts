import { Castable } from '@bitr/castable';
export interface DepthRequest {
    pair: string;
}
export interface TickerRequest {
    pair: string;
}
export interface TransactionsRequest {
    pair: string;
    date?: string;
}
export interface CandlestickRequest {
    pair: string;
    candleType: string;
    date: string;
}
export interface SendOrderRequest {
    pair: string;
    amount: number;
    price: number;
    side: string;
    type: string;
    post_only: boolean;
}
export interface GetOrderRequest {
    pair: string;
    order_id: number;
}
export interface CancelOrderRequest {
    pair: string;
    order_id: number;
}
export interface SuccessResponse<T> {
    success: 1;
    data: T;
}
export interface ErrorResponse {
    success: 0;
    data: {
        code: number;
    };
}
export declare class DepthResponse extends Castable {
    asks: number[][];
    bids: number[][];
    timestamp: number;
}
export declare class TickerResponse extends Castable {
    sell: number;
    buy: number;
    high: number;
    low: number;
    last: number;
    vol: number;
    timestamp: Date;
}
export declare class Transaction extends Castable {
    transaction_id: number;
    side: string;
    price: number;
    amount: number;
    executed_at: Date;
}
export declare class TransactionsResponse extends Castable {
    transactions: Transaction[];
}
export declare class CandleStick extends Castable {
    type: string;
    ohlcv: number[][];
}
export declare class CandlestickResponse extends Castable {
    candlestick: CandleStick[];
}
export declare class Asset extends Castable {
    asset: string;
    amount_precision: number;
    onhand_amount: number;
    locked_amount: number;
    free_amount: number;
    withdrawal_fee: number;
}
export declare class AssetsResponse extends Castable {
    assets: Asset[];
}
export declare class OrderModel extends Castable {
    order_id: number;
    pair: string;
    side: string;
    type: string;
    start_amount: number;
    remaining_amount: number;
    executed_amount: number;
    price: number;
    average_price: number;
    ordered_at: Date;
    status: string;
}
export declare class SendOrderResponse extends OrderModel {
}
export declare class GetOrderResponse extends OrderModel {
}
export declare class CancelOrderResponse extends OrderModel {
}
export interface CancelOrdersRequest {
    pair: string;
    order_ids: number[];
}
export declare class CancelOrdersResponse extends Castable {
    orders: OrderModel[];
}
export interface OrdersInfoRequest {
    pair: string;
    order_ids: number[];
}
export declare class OrdersInfoResponse extends Castable {
    orders: OrderModel[];
}
export interface ActiveOrdersRequest {
    pair: string;
    count: number;
    from_id: number;
    end_id: number;
    since: number;
    end: number;
}
export declare class ActiveOrdersResponse extends Castable {
    orders: OrderModel[];
}
export interface TradeHistoryRequest {
    pair: string;
    count: number;
    order_id: number;
    since: number;
    end: number;
    order?: string;
}
export declare class TradeModel extends Castable {
    trade_id: number;
    pair: string;
    order_id: number;
    side: string;
    type: string;
    amount: number;
    price: number;
    maker_taker: string;
    fee_amount_base: number;
    fee_amount_quote: number;
    executed_at: Date;
}
export declare class TradeHistoryResponse extends Castable {
    trades: TradeModel[];
}
export interface WithdrawalAccountRequest {
    asset: string;
}
export declare class Account extends Castable {
    uuid: string;
    label: string;
    address: string;
}
export declare class WithdrawalAccountResponse extends Castable {
    accounts: Account[];
}
export interface RequestWithdrawalRequest {
    asset: string;
    uuid: string;
    amount: string;
    otp_token?: string;
    sms_token?: string;
}
export declare class RequestWithdrawalResponse extends Castable {
    uuid: string;
    asset: string;
    amount: number;
    account_uuid: string;
    fee: number;
    status: string;
    label: string;
    txid: string;
    address: string;
}
