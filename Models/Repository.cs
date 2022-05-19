using System;
using ReactPr.Models.Interface;

namespace ReactPr.Models
{
    public class Repository:IRepository
    {
        private ContextDB context;
        public Repository(ContextDB context){
            this.context=context;
        }

        public IQueryable<Request> Requests => context.Requests;

        public void RequestAdd(Request request){
            context.AddAsync(request);
            context.SaveChangesAsync();
        }
    }
}
