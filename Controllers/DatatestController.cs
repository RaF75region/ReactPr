using System;
using Microsoft.AspNetCore.Mvc;
using ReactPr.Models.TestModel;

namespace ReactPr.Controllers;
[ApiController]
[Route("[controller]")]

public class DatatestController: ControllerBase
{
    List<User> TestList=new List<User>(){
        new User(){Id=1,Name="Test1"},
        new User(){Id=2,Name="Test2"},
        new User(){Id=3,Name="Test3"},
        new User(){Id=4,Name="Test4"},
        new User(){Id=5,Name="Test5"},
    };

    [HttpGet]
    public IEnumerable<User> Get(){
        return TestList;
    }
}
