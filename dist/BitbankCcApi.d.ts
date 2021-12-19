/// <reference types="node" />
import { DepthResponse, DepthRequest, SendOrderRequest, GetOrderResponse, GetOrderRequest, CancelOrderResponse, CancelOrderRequest, SendOrderResponse, TickerResponse, TickerRequest, TransactionsRequest, TransactionsResponse, CandlestickRequest, CandlestickResponse, AssetsResponse, CancelOrdersRequest, CancelOrdersResponse, OrdersInfoRequest, OrdersInfoResponse, ActiveOrdersRequest, ActiveOrdersResponse, TradeHistoryRequest, TradeHistoryResponse, WithdrawalAccountRequest, WithdrawalAccountResponse, RequestWithdrawalRequest, RequestWithdrawalResponse } from './apiTypes';
import { EventEmitter } from 'events';
export default class BitbankCcApi extends EventEmitter {
    private readonly key;
    private readonly secret;
    private readonly timeout;
    private readonly publicApiBaseUrl;
    private readonly privateApiBaseUrl;
    private readonly publicApiAxios;
    private readonly privateApiAxios;
    constructor(key: string, secret: string, timeout?: number);
    getTicker(request: TickerRequest): Promise<TickerResponse>;
    getDepth(request: DepthRequest): Promise<DepthResponse>;
    getTransactions(request: TransactionsRequest): Promise<TransactionsResponse>;
    getCandlestick(request: CandlestickRequest): Promise<CandlestickResponse>;
    getAssets(): Promise<AssetsResponse>;
    sendOrder(request: SendOrderRequest): Promise<SendOrderResponse>;
    getOrder(request: GetOrderRequest): Promise<GetOrderResponse>;
    cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse>;
    cancelOrders(request: CancelOrdersRequest): Promise<CancelOrdersResponse>;
    getOrdersInfo(request: OrdersInfoRequest): Promise<OrdersInfoResponse>;
    getActiveOrders(request: ActiveOrdersRequest): Promise<ActiveOrdersResponse>;
    getTradeHistory(request: TradeHistoryRequest): Promise<TradeHistoryResponse>;
    getWithdrawalAccount(request: WithdrawalAccountRequest): Promise<WithdrawalAccountResponse>;
    requestWithdrawal(request: RequestWithdrawalRequest): Promise<RequestWithdrawalResponse>;
    private privateApiCall;
    private post;
    private get;
    private getPublic;
    private checkError;
    private createPostConfig;
    private createGetConfig;
}
