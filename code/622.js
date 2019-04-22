//循环队列
var MyCircularQueue = function(k) {
    //队列长度
    this.size = k
    //队首指针
    this.head = -1
    // 队尾指针
    this.tail = -1
    //创建数组
    this.data = []
};

MyCircularQueue.prototype.enQueue = function(value) {
    //检查队列是否满了
    if (this.isFull()) {
        return false
    }
    // 检查队列是否为空
    if (this.isEmpty()) {
        this.head = 0
    }
    this.tail = (this.tail + 1)%this.size
    this.data[this.tail] = value
    return true
};

MyCircularQueue.prototype.deQueue = function() {
    // 先判断是否为空
    if (!this.isEmpty()) {
      // 判断是不是满队列
        if (this.tail === this.head) {
            this.tail = -1
            this.head = -1
        } else {
          // 头指针向后移动一个
            this.head = (this.head + 1)%this.size
        }
        return true
    }
    return false
};

MyCircularQueue.prototype.Front = function() {
    return this.head === -1? -1 : this.data[this.head]
};


MyCircularQueue.prototype.Rear = function() {
    return this.tail === -1 ? -1 : this.data[this.tail]
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.tail === -1 && this.head === -1
};

MyCircularQueue.prototype.isFull = function() {
    return (this.tail + 1)%this.size === this.head
};

MyCircularQueue.createNew = function(k) {
    return new MyCircularQueue(k)
};
