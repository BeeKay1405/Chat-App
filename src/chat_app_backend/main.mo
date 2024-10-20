import Array "mo:base/Array";

actor ChatApp {
    type Message = {
        sender: Text;
        content: Text;
    };

    var messages: [Message] = [];

    public func postMessage(sender: Text, content: Text) : async Text {
        let newMessage = {
            sender = sender;
            content = content;
        };
        messages := Array.append(messages, [newMessage]);
        return "Message posted successfully!";
    };

    public query func getMessages() : async [Message] {
        return messages;
    };
};
