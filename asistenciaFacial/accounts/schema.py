import graphene
from graphene_django import DjangoObjectType
from .models import Paciente, Doctor, Administrador

class PacienteType(DjangoObjectType):
    class Meta:
        model = Paciente

class DoctorType(DjangoObjectType):
    class Meta:
        model = Doctor

class AdministradorType(DjangoObjectType):
    class Meta:
        model = Administrador

class Query(graphene.ObjectType):
    pacientes = graphene.List(PacienteType)
    doctores = graphene.List(DoctorType)
    administradores = graphene.List(AdministradorType)

    def resolve_pacientes(self, info):
        return Paciente.objects.all()

    def resolve_doctores(self, info):
        return Doctor.objects.all()

    def resolve_administradores(self, info):
        return Administrador.objects.all()

class Mutation(graphene.ObjectType):
    # Define mutaciones para manejar la creación, actualización y eliminación de usuarios
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
