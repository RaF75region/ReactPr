using System;
using Microsoft.AspNetCore.SignalR;

namespace ReactPr.Hub
{
    
    public class HubTest:Microsoft.AspNetCore.SignalR.Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
