import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IEmitDTO from '@shared/container/providers/WebSocketProvider/dtos/IEmitDTO';

import webSocketConfig from '@config/websocket';

import IConnections from '../models/IConnections';
import IWebSocketProvider from '../models/IWebSocketProvider';

@injectable()
class SocketIOWebSocketProvider implements IWebSocketProvider {
  constructor(
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async create() {
    return { name: 'fake-websocket-client' };
  }

  public async getConnections(): Promise<IConnections> {
    let connections = await this.cacheProvider.recover<IConnections>(
      webSocketConfig.cache_key,
    );

    if (!connections) {
      connections = {};
    }

    return connections;
  }

  public async connect(user_id: string, socket_id: string): Promise<void> {
    const connections = await this.getConnections();

    connections[user_id] = socket_id;

    await this.cacheProvider.save(webSocketConfig.cache_key, connections);
  }

  public async disconnect(user_id: string): Promise<void> {
    const connections = await this.getConnections();

    const connection = connections[user_id];

    if (!connection) return;

    delete connections[user_id];

    await this.cacheProvider.save(webSocketConfig.cache_key, connections);
  }

  public async emit(_data: IEmitDTO): Promise<void> {
    // nothing occurs here
  }

  public async isConnected(user_id: string): Promise<boolean> {
    const connections = await this.getConnections();

    const connection = connections[user_id];

    return !!connection;
  }
}

export default SocketIOWebSocketProvider;
