export default function inject(node, argument = "body") {
    var targetNode;

    if (typeof argument !== "string") {
        targetNode = argument;
    } else {
        targetNode = document.querySelector(argument);
    }

    targetNode.appendChild(node);

    return {
        destroy() {
            node.remove();
        }
    }
}