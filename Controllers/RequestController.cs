using System;
using Microsoft.AspNetCore.Mvc;
using ReactPr.Models;
using ReactPr.Models.Interface;

namespace ReactPr.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RequestController:ControllerBase
    {
        IRepository repository;
        public RequestController(IRepository repos){
            repository = repos;
        }

        [HttpGet]
        public IEnumerable<Request> GetRequests(){
            return repository.Requests.ToArray();
        }
    }
}
