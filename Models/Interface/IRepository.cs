using System;
using ReactPr.Models;

namespace ReactPr.Models.Interface
{
    public interface IRepository
    {
        IQueryable<Request> Requests {get;}
        public void RequestAdd(Request request);
    }
}
