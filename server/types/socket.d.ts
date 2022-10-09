type Username = string
type Message = string

interface ServerToClientEvents {
  updateChat: (username: Username, message: Message) => void
  updateRooms: (a: typeof rooms, b: string | null) => void
}

interface ClientToServerEvents {
  createRoom: (username: Username) => void
  sendMessage: (data: { username: Username; message: Message }) => void
  updateRooms: (room: string) => void
}

interface InterServerEvents {
  ping: () => void
}

interface SocketData {
  username: Username
  currentRoom: string
}

export { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData }
