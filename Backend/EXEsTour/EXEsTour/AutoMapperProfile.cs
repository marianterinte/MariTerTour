using AutoMapper;
using EXEsTour.Domain.Entities;
using EXEsTour.WebApi.DTO;

namespace EXEsTour.WebApi
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}