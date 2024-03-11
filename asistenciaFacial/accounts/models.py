from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Define los campos adicionales para el modelo de usuario
    # Por ejemplo, podrías agregar campos específicos como 'role', 'age', etc.
    role = models.CharField(max_length=50)


    class Meta:
        # Puedes definir otras configuraciones, si es necesario
        pass

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups'  # Nombre único para el campo inverso
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions'  # Nombre único para el campo inverso
    )
# Si tienes la necesidad de establecer una relación muchos-a-muchos personalizada
# Puedes configurar un related_name diferente para evitar conflictos
class Paciente(models.Model):
    userPaciente = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='paciente')
    # Otros campos específicos del paciente

class Doctor(models.Model):
    userDoctor = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='doctor')
    # Otros campos específicos del doctor

class Administrador(models.Model):
    userAdministrador = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='administrador')
    # Otros campos específicos del administrador
